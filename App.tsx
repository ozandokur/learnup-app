import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { lessons } from './data/lessons';
import { modules, type Module } from './data/modules';
import { quizzes, type QuizQuestion } from './data/quizzes';

type Screen = 'welcome' | 'home' | 'lesson' | 'quiz' | 'result' | 'profile';
type UserStats = {
  xp: number;
  streak: number;
  lastCompletedDate: string | null;
  completedModuleIds: string[];
};

const STORAGE_KEY = 'levelup_english_stats_v1';
const initialStats: UserStats = {
  xp: 0,
  streak: 0,
  lastCompletedDate: null,
  completedModuleIds: [],
};

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const getYesterdayKey = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
};

const loadStats = async (): Promise<UserStats> => {
  try {
    const rawValue = await AsyncStorage.getItem(STORAGE_KEY);
    return rawValue ? { ...initialStats, ...JSON.parse(rawValue) } : initialStats;
  } catch {
    return initialStats;
  }
};

const saveStats = async (stats: UserStats) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Local persistence is best-effort for this minimal MVP.
  }
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [stats, setStats] = useState<UserStats>(initialStats);
  const [hasLoadedStats, setHasLoadedStats] = useState(false);

  useEffect(() => {
    const hydrateStats = async () => {
      const savedStats = await loadStats();
      setStats(savedStats);
      setHasLoadedStats(true);
    };

    hydrateStats();
  }, []);

  useEffect(() => {
    if (hasLoadedStats) {
      saveStats(stats);
    }
  }, [hasLoadedStats, stats]);

  const selectedLesson = useMemo(
    () => lessons.find((lesson) => lesson.moduleId === selectedModule?.id),
    [selectedModule]
  );

  const moduleQuestions = useMemo(
    () => quizzes.filter((quiz) => quiz.moduleId === selectedModule?.id),
    [selectedModule]
  );

  const currentQuestion: QuizQuestion | undefined = moduleQuestions[questionIndex];
  const completedCount = stats.completedModuleIds.length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);
  const learnedWords = completedCount * 5;

  const openLesson = (module: Module) => {
    setSelectedModule(module);
    setScreen('lesson');
  };

  const startQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setScreen('quiz');
  };

  const chooseAnswer = (answer: string) => {
    if (selectedAnswer || !currentQuestion) return;

    setSelectedAnswer(answer);

    if (answer === currentQuestion.answer) {
      setCorrectCount((count) => count + 1);
    }
  };

  const completeModule = () => {
    if (!selectedModule) return;

    setStats((currentStats) => {
      const isAlreadyCompleted = currentStats.completedModuleIds.includes(selectedModule.id);
      const today = getTodayKey();
      const yesterday = getYesterdayKey();
      const shouldUpdateStreak = currentStats.lastCompletedDate !== today;
      const nextStreak = shouldUpdateStreak
        ? currentStats.lastCompletedDate === yesterday
          ? currentStats.streak + 1
          : 1
        : currentStats.streak;

      return {
        xp: isAlreadyCompleted ? currentStats.xp : currentStats.xp + selectedModule.xp,
        streak: nextStreak,
        lastCompletedDate: shouldUpdateStreak ? today : currentStats.lastCompletedDate,
        completedModuleIds: isAlreadyCompleted
          ? currentStats.completedModuleIds
          : [...currentStats.completedModuleIds, selectedModule.id],
      };
    });
  };

  const nextQuestion = () => {
    if (questionIndex + 1 >= moduleQuestions.length) {
      completeModule();
      setScreen('result');
      return;
    }

    setQuestionIndex((index) => index + 1);
    setSelectedAnswer(null);
  };

  const resetProgress = () => {
    setStats(initialStats);
    setScreen('profile');
  };

  const renderBottomNav = () => (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => setScreen('home')}>
        <Text style={[styles.navIcon, screen === 'home' && styles.activeNavText]}>🏠</Text>
        <Text style={[styles.navText, screen === 'home' && styles.activeNavText]}>Today</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setScreen('profile')}>
        <Text style={[styles.navIcon, screen === 'profile' && styles.activeNavText]}>👤</Text>
        <Text style={[styles.navText, screen === 'profile' && styles.activeNavText]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFrame = (children: ReactNode, showNav = false) => (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.appFrame}>
        <View style={styles.screenBody}>{children}</View>
        {showNav && renderBottomNav()}
      </View>
    </SafeAreaView>
  );

  if (screen === 'welcome') {
    return renderFrame(
      <View style={styles.welcomeContent}>
        <View style={styles.logoBox}>
          <Text style={styles.logoIcon}>↗</Text>
        </View>

        <Text style={styles.title}>LevelUp English</Text>
        <Text style={styles.subtitle}>Her gün 7 dakikada İngilizce seviyeni geliştir.</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroEmoji}>🏆</Text>
          <Text style={styles.heroTitle}>Beginner Path</Text>
          <Text style={styles.heroText}>
            5 kısa modül, kelime pratiği, mini quizler ve günlük streak.
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen('home')}>
          <Text style={styles.primaryButtonText}>Başla →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === 'lesson' && selectedModule && selectedLesson) {
    return renderFrame(
      <ScrollView contentContainerStyle={styles.homeContent}>
        <TouchableOpacity onPress={() => setScreen('home')}>
          <Text style={styles.backText}>← Home</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>{selectedModule.title}</Text>
        <Text style={styles.screenSubtitle}>{selectedLesson.objective}</Text>

        <Text style={styles.sectionTitle}>Vocabulary</Text>

        {selectedLesson.vocabulary.map((item) => (
          <View key={item.en} style={styles.wordCard}>
            <View style={styles.wordRow}>
              <Text style={styles.wordEnglish}>{item.en}</Text>
              <Text style={styles.wordTurkish}>{item.tr}</Text>
            </View>
            <Text style={styles.exampleText}>{item.example}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.primaryButton} onPress={startQuiz}>
          <Text style={styles.primaryButtonText}>Quiz'e Başla →</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (screen === 'quiz' && selectedModule && currentQuestion) {
    const isAnswered = Boolean(selectedAnswer);

    return renderFrame(
      <View style={styles.quizContent}>
        <View style={styles.quizTopRow}>
          <TouchableOpacity onPress={() => setScreen('lesson')}>
            <Text style={styles.backText}>← Lesson</Text>
          </TouchableOpacity>
          <Text style={styles.quizCounter}>
            {questionIndex + 1} / {moduleQuestions.length}
          </Text>
        </View>

        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${((questionIndex + 1) / moduleQuestions.length) * 100}%` },
            ]}
          />
        </View>

        <Text style={styles.questionLabel}>{selectedModule.title}</Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.answer;
          const showCorrect = isAnswered && isCorrect;
          const showWrong = isAnswered && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionCard,
                showCorrect && styles.correctOption,
                showWrong && styles.wrongOption,
              ]}
              onPress={() => chooseAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          );
        })}

        {isAnswered && (
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>
              {selectedAnswer === currentQuestion.answer
                ? 'Doğru! Harika ilerliyorsun.'
                : `Yanlış. Doğru cevap: ${currentQuestion.answer}`}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.primaryButton, !isAnswered && styles.disabledButton]}
          onPress={nextQuestion}
          disabled={!isAnswered}
        >
          <Text style={styles.primaryButtonText}>
            {questionIndex + 1 >= moduleQuestions.length ? 'Sonucu Gör' : 'Sonraki Soru →'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === 'result' && selectedModule) {
    const scorePercent = Math.round((correctCount / moduleQuestions.length) * 100);
    const isAlreadyCompleted = stats.completedModuleIds.includes(selectedModule.id);

    return renderFrame(
      <View style={styles.resultContent}>
        <Text style={styles.heroEmoji}>🎉</Text>
        <Text style={styles.title}>Quiz Tamamlandı</Text>
        <Text style={styles.subtitle}>{selectedModule.title}</Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>
            {correctCount} / {moduleQuestions.length} doğru
          </Text>
          <Text style={styles.heroText}>Başarı oranın: %{scorePercent}</Text>
          <Text style={styles.moduleXp}>
            {isAlreadyCompleted ? 'Bu modül tamamlandı' : `+${selectedModule.xp} XP kazandın`}
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen('home')}>
          <Text style={styles.primaryButtonText}>Home'a Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === 'profile') {
    return renderFrame(
      <ScrollView contentContainerStyle={styles.homeContent}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>O</Text>
          </View>
          <Text style={styles.screenTitle}>Profil</Text>
          <Text style={styles.screenSubtitle}>Beginner English öğrenme ilerlemen</Text>
        </View>

        <View style={styles.profileSummaryCard}>
          <Text style={styles.profileSummaryTitle}>LevelUp Learner</Text>
          <Text style={styles.profileSummaryText}>
            {completedCount === 0
              ? 'Henüz modül tamamlamadın. İlk dersini bitirerek streak başlat.'
              : `${completedCount} modül tamamladın ve ${learnedWords} kelime pratiği yaptın.`}
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>XP</Text>
            <Text style={styles.statValue}>{stats.xp}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>Streak</Text>
            <Text style={styles.statValue}>{stats.streak} 🔥</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>Modules</Text>
            <Text style={styles.statValue}>{completedCount}/{modules.length}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>Words</Text>
            <Text style={styles.statValue}>{learnedWords}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Modül Durumu</Text>
        {modules.map((module) => {
          const isCompleted = stats.completedModuleIds.includes(module.id);
          return (
            <View key={module.id} style={styles.profileModuleRow}>
              <Text style={styles.profileModuleTitle}>{module.title}</Text>
              <Text style={[styles.profileModuleStatus, isCompleted && styles.completedStatus]}>
                {isCompleted ? 'Completed' : 'Not started'}
              </Text>
            </View>
          );
        })}

        <TouchableOpacity style={styles.resetButton} onPress={resetProgress}>
          <Text style={styles.resetButtonText}>İlerlemeyi Sıfırla</Text>
        </TouchableOpacity>
      </ScrollView>,
      true
    );
  }

  return renderFrame(
    <ScrollView contentContainerStyle={styles.homeContent}>
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Welcome back</Text>
          <Text style={styles.headerTitle}>LevelUp English</Text>
        </View>

        <View style={styles.streakPill}>
          <Text style={styles.streakText}>{stats.streak} 🔥</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.cardLabel}>XP</Text>
          <Text style={styles.statValue}>{stats.xp}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.cardLabel}>Completed</Text>
          <Text style={styles.statValue}>{completedCount}/{modules.length}</Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.cardLabel}>Öğrenme yolum</Text>
        <Text style={styles.pathTitle}>Beginner English</Text>
        <Text style={styles.progressText}>%{progressPercent} tamamlandı</Text>

        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${Math.max(progressPercent, 4)}%` }]} />
        </View>
      </View>

      <View style={styles.goalCard}>
        <Text style={styles.goalTitle}>Bugünkü hedefin</Text>
        <Text style={styles.goalText}>1 kısa ders tamamla, 5 kelime öğren ve mini quiz çöz.</Text>
      </View>

      <Text style={styles.sectionTitle}>Modüller</Text>

      {modules.map((module, index) => {
        const isCompleted = stats.completedModuleIds.includes(module.id);

        return (
          <TouchableOpacity key={module.id} style={styles.moduleCard} onPress={() => openLesson(module)}>
            <View style={styles.moduleNumber}>
              <Text style={styles.moduleNumberText}>{isCompleted ? '✓' : index + 1}</Text>
            </View>

            <View style={styles.moduleContent}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleDescription}>{module.description}</Text>
              <Text style={styles.moduleXp}>{isCompleted ? 'Completed' : `+${module.xp} XP`}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>,
    true
  );
}

const PURPLE = '#5B3BE8';
const LIGHT_PURPLE = '#F1EDFF';
const TEXT = '#242033';
const MUTED = '#746F86';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDE9F8', alignItems: 'center' },
  appFrame: { flex: 1, width: '100%', maxWidth: 430, backgroundColor: '#FBF9FF' },
  screenBody: { flex: 1 },
  welcomeContent: { flex: 1, justifyContent: 'center', padding: 24 },
  logoBox: { width: 88, height: 88, borderRadius: 28, backgroundColor: PURPLE, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 28 },
  logoIcon: { color: 'white', fontSize: 44, fontWeight: '800' },
  title: { fontSize: 38, fontWeight: '800', color: PURPLE, textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 17, color: MUTED, textAlign: 'center', fontWeight: '600', marginBottom: 28 },
  heroCard: { backgroundColor: 'white', borderRadius: 28, padding: 24, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, elevation: 3 },
  heroEmoji: { fontSize: 52, textAlign: 'center', marginBottom: 12 },
  heroTitle: { fontSize: 24, fontWeight: '800', color: TEXT, textAlign: 'center', marginBottom: 8 },
  heroText: { fontSize: 16, color: MUTED, textAlign: 'center', lineHeight: 23 },
  primaryButton: { backgroundColor: PURPLE, borderRadius: 18, paddingVertical: 18, alignItems: 'center', marginTop: 14, marginBottom: 14 },
  primaryButtonText: { color: 'white', fontSize: 18, fontWeight: '800' },
  secondaryButton: { backgroundColor: 'white', borderRadius: 18, paddingVertical: 18, alignItems: 'center', borderWidth: 1, borderColor: '#DED8FF' },
  secondaryButtonText: { color: PURPLE, fontSize: 18, fontWeight: '800' },
  homeContent: { padding: 20, paddingBottom: 40 },
  header: { marginTop: 12, marginBottom: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  smallText: { color: MUTED, fontSize: 14, fontWeight: '600' },
  headerTitle: { color: TEXT, fontSize: 28, fontWeight: '800' },
  streakPill: { backgroundColor: LIGHT_PURPLE, borderRadius: 999, paddingHorizontal: 16, paddingVertical: 10 },
  streakText: { color: PURPLE, fontWeight: '800', fontSize: 16 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: 'white', borderRadius: 22, padding: 16, borderWidth: 1, borderColor: '#EEEAFB' },
  statValue: { color: TEXT, fontSize: 24, fontWeight: '900', marginTop: 4 },
  progressCard: { backgroundColor: LIGHT_PURPLE, borderRadius: 28, padding: 22, marginBottom: 16 },
  cardLabel: { color: PURPLE, fontWeight: '800', fontSize: 15, marginBottom: 8 },
  pathTitle: { color: TEXT, fontSize: 24, fontWeight: '800', marginBottom: 6 },
  progressText: { color: MUTED, fontWeight: '700', marginBottom: 14 },
  progressBarBackground: { height: 10, borderRadius: 999, backgroundColor: '#DDD6FF' },
  progressBarFill: { height: 10, borderRadius: 999, backgroundColor: PURPLE },
  goalCard: { backgroundColor: 'white', borderRadius: 24, padding: 20, marginBottom: 22, borderWidth: 1, borderColor: '#EEEAFB' },
  goalTitle: { fontSize: 20, color: TEXT, fontWeight: '800', marginBottom: 6 },
  goalText: { fontSize: 15, color: MUTED, lineHeight: 22, fontWeight: '600' },
  sectionTitle: { fontSize: 22, color: TEXT, fontWeight: '800', marginBottom: 12 },
  moduleCard: { backgroundColor: 'white', borderRadius: 24, padding: 18, marginBottom: 14, flexDirection: 'row', borderWidth: 1, borderColor: '#EEEAFB' },
  moduleNumber: { width: 42, height: 42, borderRadius: 14, backgroundColor: LIGHT_PURPLE, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  moduleNumberText: { color: PURPLE, fontWeight: '900', fontSize: 18 },
  moduleContent: { flex: 1 },
  moduleTitle: { fontSize: 18, color: TEXT, fontWeight: '800', marginBottom: 4 },
  moduleDescription: { fontSize: 14, color: MUTED, lineHeight: 20, marginBottom: 8 },
  moduleXp: { color: PURPLE, fontWeight: '800' },
  backText: { color: PURPLE, fontWeight: '800', fontSize: 16, marginBottom: 18 },
  screenTitle: { color: TEXT, fontSize: 34, fontWeight: '900', marginBottom: 8 },
  screenSubtitle: { color: MUTED, fontSize: 16, fontWeight: '600', lineHeight: 22, marginBottom: 24 },
  wordCard: { backgroundColor: 'white', borderRadius: 22, padding: 18, marginBottom: 12, borderWidth: 1, borderColor: '#EEEAFB' },
  wordRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginBottom: 8 },
  wordEnglish: { color: TEXT, fontSize: 20, fontWeight: '900' },
  wordTurkish: { color: PURPLE, fontSize: 16, fontWeight: '800' },
  exampleText: { color: MUTED, fontSize: 15, fontWeight: '600', lineHeight: 21 },
  quizContent: { flex: 1, padding: 20 },
  quizTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  quizCounter: { color: PURPLE, fontSize: 16, fontWeight: '900' },
  questionLabel: { color: PURPLE, fontSize: 14, fontWeight: '900', marginTop: 32, marginBottom: 8 },
  questionText: { color: TEXT, fontSize: 32, fontWeight: '900', lineHeight: 38, marginBottom: 24 },
  optionCard: { backgroundColor: 'white', borderRadius: 20, padding: 18, marginBottom: 12, borderWidth: 2, borderColor: '#EEEAFB' },
  correctOption: { borderColor: '#2EBD59', backgroundColor: '#ECFFF2' },
  wrongOption: { borderColor: '#E34B4B', backgroundColor: '#FFF0F0' },
  optionText: { color: TEXT, fontSize: 18, fontWeight: '800' },
  feedbackBox: { backgroundColor: LIGHT_PURPLE, borderRadius: 18, padding: 16, marginTop: 8 },
  feedbackText: { color: TEXT, fontSize: 15, fontWeight: '800' },
  disabledButton: { opacity: 0.45 },
  resultContent: { flex: 1, justifyContent: 'center', padding: 24 },
  bottomNav: { height: 74, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#EEEAFB', backgroundColor: 'white' },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  navIcon: { fontSize: 20, marginBottom: 3, opacity: 0.65 },
  navText: { color: MUTED, fontSize: 12, fontWeight: '900', textTransform: 'uppercase' },
  activeNavText: { color: PURPLE, opacity: 1 },
  profileHeader: { alignItems: 'center', marginTop: 16, marginBottom: 8 },
  avatarCircle: { width: 86, height: 86, borderRadius: 28, backgroundColor: PURPLE, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  avatarText: { color: 'white', fontSize: 38, fontWeight: '900' },
  profileSummaryCard: { backgroundColor: LIGHT_PURPLE, borderRadius: 28, padding: 22, marginBottom: 16 },
  profileSummaryTitle: { color: TEXT, fontSize: 22, fontWeight: '900', marginBottom: 8 },
  profileSummaryText: { color: MUTED, fontSize: 15, lineHeight: 22, fontWeight: '700' },
  profileModuleRow: { backgroundColor: 'white', borderRadius: 18, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: '#EEEAFB', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  profileModuleTitle: { color: TEXT, fontSize: 15, fontWeight: '900', flex: 1, marginRight: 12 },
  profileModuleStatus: { color: MUTED, fontSize: 13, fontWeight: '900' },
  completedStatus: { color: PURPLE },
  resetButton: { backgroundColor: 'transparent', borderRadius: 16, paddingVertical: 14, alignItems: 'center', marginTop: 8, borderWidth: 1, borderColor: '#DED8FF' },
  resetButtonText: { color: MUTED, fontSize: 14, fontWeight: '800' },
});
