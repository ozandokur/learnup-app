# LevelUp English

Minimal English learning mobile app built with Expo, React Native, and TypeScript.

## MVP Scope

- English-only beginner path
- No AI in the first version
- No backend in the first version
- Local lessons and quizzes
- Local progress with AsyncStorage
- XP, streak, completed modules, profile screen

## Features

- Welcome screen
- Demo login button
- Today screen
- Lesson screen
- Quiz screen
- Result screen
- Profile screen
- Bottom navigation
- Progress reset button

## Content

The app currently has 10 beginner modules, 50 vocabulary items, and 50 quiz questions.

## Run

```bash
npm install
npm start
```

Then open with Expo Go or run the web version from the Expo terminal.

## Manual Test Checklist

- Welcome opens
- Start opens Home
- Login opens Home
- Profile opens from Home
- Bottom navigation works
- Modules open lessons
- Lessons open quizzes
- Quiz answers show feedback
- Result screen shows score
- New completed module adds XP
- Completed modules are saved after reload
- Reset progress clears local progress
