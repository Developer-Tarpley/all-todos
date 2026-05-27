export function loadNotes() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes));
  } catch {
    // non-blocking error
  }
}