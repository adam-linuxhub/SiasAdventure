# Sia Content Toolkit

## Install

```bash
cd tools/contentToolkit
npm install
```

## Commands

### Scan

```bash
npm run scan
```

Scans the entire content bank.

---

### Validate

```bash
npm run validate
```

Checks for:

- Missing IDs
- Missing hints
- Missing explanations
- Missing tags
- Invalid options
- Invalid answers

---

### Statistics

```bash
npm run stats
```

Shows:

- Number of files
- Number of questions
- Missing hints
- Difficulty distribution

---

### Hint Generator

```bash
npm run hints
```

Produces AI prompts for every missing hint.

---

### British English

```bash
npm run spellcheck
```

Reports American spellings.

---

### Duplicate Questions

```bash
npm run duplicates
```

Finds duplicate question text.

---

### Auto Fix

```bash
npm run fix
```

Reserved for future automatic fixes.

---

## Roadmap

### Version 1.0

- ✓ Scan
- ✓ Validate
- ✓ Statistics
- ✓ Duplicate Detection
- ✓ Spell Check
- ✓ Hint Prompt Generation

### Version 2.0

- Automatic hint insertion
- Dry Run mode
- Progress display
- JSON reports

### Version 3.0

- AI provider support
- Explanation generation
- Reading age analysis
- Difficulty balancing
- Duplicate explanation detection

### Version 4.0

- SATs validation
- 11+ validation
- Content optimisation
- Automatic Git commits