// Sugar is calculated in all condition we can make this as some at the end of all the condition

if (recipe == "SPANISH") {
  fudge = SPANISH_FUDGE;
  amt = base * SPANISH_FUDGE;
} else if (recipe == "FRENCH" || recipe == "ENGLISH") {
  fudge = recipe == "FRENCH" ? FRENCH_FUDGE : ENGLISH_FUDGE;
  amt = base * fudge;
  if (recipe == "FRENCH") {
    chocolate = 7;
  }
} else {
  fudge = 1;
  amt = base;
}
sugar = 2 * bottom(amt) + top(amt) * 1.17;
