# CLICKER AIM // TRAINER

> A minimalist, DOM-based reaction trainer trainer. Built entirely with Vanilla JavaScript.

**Live Demo:** [https://junaid-akhtar11.github.io/endterm-aimtrainer/](https://junaid-akhtar11.github.io/endterm-aimtrainer/)

---

## 📌 Overview

**Clicker Aim** is a fully functional web application developed as the **Web Dev II Final Project**. It serves as a competitive aim trainer where users must click appearing targets within a time limit to achieve a high rank.

This project was built to demonstrate my abilities of **Core Vainlla JavaScript** 

---

## 🛠️ Technical Implementation

Per the assignment requirements, this project focuses on the following core concepts:

### 1. DOM Manipulation
The 5x5 game grid is **not hardcoded** in HTML. Instead, it is dynamically generated using JavaScript loops:
- `document.createElement('div')` is used to build the grid cells.
- `appendChild()` adds them to the DOM container.
- Classes are added/removed dynamically (`classList.add('target')`) to control the game visuals.

### 2. Event-Driven Programming
- The application relies heavily on `addEventListener`.
- Each grid cell listens for `mousedown` events to register hits.
- The game state responds immediately to user interaction (score updates, target respawn).

### 3. State Handling
Game state is managed entirely on the client side using JavaScript variables:
- `isPlaying` (Boolean flag to prevent interaction when game is over).
- `score` & `timeLeft` (Integers tracked in real-time).
- `targetIdx` (Tracks the current active cell to prevent duplicate spawns).

### 4. Application-Level Logic
- **Randomization:** Uses `Math.random()` to
