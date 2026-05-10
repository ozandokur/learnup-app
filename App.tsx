import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const modules = [
  {
    id: 'basic-greetings',
    title: 'Basic Greetings',
    description: 'Learn simple greetings like hello, goodbye, and thank you.',
    xp: 20,
  },
  {
    id: 'introducing-yourself',
    title: 'Introducing Yourself',
    description: 'Learn how to say your name, age, and where you are from.',
    xp: 20,
  },
  {
    id: 'numbers-and-age',
    title: 'Numbers and Age',
    description: 'Practice numbers and simple age sentences.',
    xp: 20,
  },
  {
    id: 'daily-objects',
    title: 'Daily Objects',
    description: 'Learn common objects you see every day.',
    xp: 20,
  },
  {
    id: 'common-verbs',
    title: 'Common Verbs',
    description: 'Start using basic English verbs in short sentences.',
    xp: 20,
  },
];

export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'home'>('welcome');

  if (screen === 'welcome') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.welcomeContent}>
          <View style={styles.logoBox}>
            <Text style={styles.logoIcon}>↗</Text>
          </View>

          <Text style={styles.title}>LevelUp English</Text>
          <Text style={styles.subtitle}>
            Her gün 7 dakikada İngilizce seviyeni geliştir.
          </Text>

          <View style={styles.heroCard}>
            <Text style={styles.heroEmoji}>🏆</Text>
            <Text style={styles.heroTitle}>Beginner Path</Text>
            <Text style={styles.heroText}>
              5 kısa modül, kelime pratiği, mini quizler ve günlük streak.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setScreen('home')}
          >
            <Text style={styles.primaryButtonText}>Başla →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.homeContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Welcome back</Text>
            <Text style={styles.headerTitle}>LevelUp English</Text>
          </View>

          <View style={styles.streakPill}>
            <Text style={styles.streakText}>12 🔥</Text>
          </View>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.cardLabel}>Öğrenme yolum</Text>
          <Text style={styles.pathTitle}>Beginner English</Text>
          <Text style={styles.progressText}>%0 tamamlandı</Text>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>Bugünkü hedefin</Text>
          <Text style={styles.goalText}>
            1 kısa ders tamamla, 5 kelime öğren ve mini quiz çöz.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Modüller</Text>

        {modules.map((module, index) => (
          <TouchableOpacity key={module.id} style={styles.moduleCard}>
            <View style={styles.moduleNumber}>
              <Text style={styles.moduleNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.moduleContent}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleDescription}>{module.description}</Text>
              <Text style={styles.moduleXp}>+{module.xp} XP</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const PURPLE = '#5B3BE8';
const LIGHT_PURPLE = '#F1EDFF';
const TEXT = '#242033';
const MUTED = '#746F86';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FF',
  },
  welcomeContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logoBox: {
    width: 88,
    height: 88,
    borderRadius: 28,
    backgroundColor: PURPLE,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  logoIcon: {
    color: 'white',
    fontSize: 44,
    fontWeight: '800',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: PURPLE,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: MUTED,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 28,
  },
  heroCard: {
    backgroundColor: 'white',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  heroEmoji: {
    fontSize: 52,
    textAlign: 'center',
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: TEXT,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroText: {
    fontSize: 16,
    color: MUTED,
    textAlign: 'center',
    lineHeight: 23,
  },
  primaryButton: {
    backgroundColor: PURPLE,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DED8FF',
  },
  secondaryButtonText: {
    color: PURPLE,
    fontSize: 18,
    fontWeight: '800',
  },
  homeContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 12,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {
    color: MUTED,
    fontSize: 14,
    fontWeight: '600',
  },
  headerTitle: {
    color: TEXT,
    fontSize: 28,
    fontWeight: '800',
  },
  streakPill: {
    backgroundColor: LIGHT_PURPLE,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  streakText: {
    color: PURPLE,
    fontWeight: '800',
    fontSize: 16,
  },
  progressCard: {
    backgroundColor: LIGHT_PURPLE,
    borderRadius: 28,
    padding: 22,
    marginBottom: 16,
  },
  cardLabel: {
    color: PURPLE,
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 8,
  },
  pathTitle: {
    color: TEXT,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  progressText: {
    color: MUTED,
    fontWeight: '700',
    marginBottom: 14,
  },
  progressBarBackground: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#DDD6FF',
  },
  progressBarFill: {
    width: '8%',
    height: 10,
    borderRadius: 999,
    backgroundColor: PURPLE,
  },
  goalCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#EEEAFB',
  },
  goalTitle: {
    fontSize: 20,
    color: TEXT,
    fontWeight: '800',
    marginBottom: 6,
  },
  goalText: {
    fontSize: 15,
    color: MUTED,
    lineHeight: 22,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 22,
    color: TEXT,
    fontWeight: '800',
    marginBottom: 12,
  },
  moduleCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEEAFB',
  },
  moduleNumber: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: LIGHT_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  moduleNumberText: {
    color: PURPLE,
    fontWeight: '900',
    fontSize: 18,
  },
  moduleContent: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 18,
    color: TEXT,
    fontWeight: '800',
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: MUTED,
    lineHeight: 20,
    marginBottom: 8,
  },
  moduleXp: {
    color: PURPLE,
    fontWeight: '800',
  },
});
