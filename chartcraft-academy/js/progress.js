/**
 * ChartCraft Academy - Progress Persistence Engine
 * Uses localStorage to save lesson completion, quiz scores, and bookmarks.
 * Survives page refreshes and browser restarts.
 */

const ProgressTracker = (() => {
  const STORAGE_KEYS = {
    COMPLETED_LESSONS: 'cca_completed_lessons',
    QUIZ_RESULTS: 'cca_quiz_results',
    LAST_VISITED: 'cca_last_visited',
    THEME: 'cca_theme'
  };

  function getCompletedLessons() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading completed lessons from localStorage:', e);
      return [];
    }
  }

  function makeLessonKey(courseId, lessonNum) {
    return `${courseId}_lesson-${lessonNum}`;
  }

  function isLessonCompleted(courseId, lessonNum) {
    const key = makeLessonKey(courseId, lessonNum);
    const completed = getCompletedLessons();
    return completed.includes(key);
  }

  function toggleLessonCompletion(courseId, lessonNum) {
    const key = makeLessonKey(courseId, lessonNum);
    const completed = getCompletedLessons();
    const index = completed.indexOf(key);
    let isNowComplete = false;

    if (index > -1) {
      completed.splice(index, 1);
      isNowComplete = false;
    } else {
      completed.push(key);
      isNowComplete = true;
    }

    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completed));
    } catch (e) {
      console.error('Error writing to localStorage:', e);
    }

    return isNowComplete;
  }

  function markLessonComplete(courseId, lessonNum) {
    const key = makeLessonKey(courseId, lessonNum);
    const completed = getCompletedLessons();
    if (!completed.includes(key)) {
      completed.push(key);
      try {
        localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completed));
      } catch (e) {
        console.error('Error writing to localStorage:', e);
      }
    }
    return true;
  }

  function getCourseProgress(courseId, totalLessons) {
    if (!totalLessons || totalLessons <= 0) return { completed: 0, total: 0, percentage: 0 };
    const completedList = getCompletedLessons();
    let completedCount = 0;

    for (let i = 1; i <= totalLessons; i++) {
      if (completedList.includes(makeLessonKey(courseId, i))) {
        completedCount++;
      }
    }

    const percentage = Math.round((completedCount / totalLessons) * 100);
    return {
      completed: completedCount,
      total: totalLessons,
      percentage: Math.min(percentage, 100)
    };
  }

  function getOverallProgress(coursesData) {
    if (!coursesData || !Array.isArray(coursesData) || coursesData.length === 0) {
      return { completedLessons: 0, totalLessons: 0, percentage: 0, completedCourses: 0, totalCourses: 0 };
    }

    let totalLessonsAll = 0;
    let completedLessonsAll = 0;
    let completedCoursesCount = 0;

    coursesData.forEach(course => {
      const courseTotal = course.chapters ? course.chapters.length : 0;
      totalLessonsAll += courseTotal;
      const progress = getCourseProgress(course.id, courseTotal);
      completedLessonsAll += progress.completed;
      if (progress.percentage === 100 && courseTotal > 0) {
        completedCoursesCount++;
      }
    });

    const percentage = totalLessonsAll > 0 
      ? Math.round((completedLessonsAll / totalLessonsAll) * 100) 
      : 0;

    return {
      completedLessons: completedLessonsAll,
      totalLessons: totalLessonsAll,
      percentage,
      completedCourses: completedCoursesCount,
      totalCourses: coursesData.length
    };
  }

  function getLevelProgress(levelDifficulty, coursesData) {
    if (!coursesData) return { completed: 0, total: 0, percentage: 0 };
    const matchingCourses = coursesData.filter(c => {
      if (levelDifficulty === 'Beginner') {
        return c.difficulty.toLowerCase().includes('beginner');
      } else if (levelDifficulty === 'Intermediate') {
        return c.difficulty.toLowerCase().includes('intermediate');
      } else if (levelDifficulty === 'Advanced') {
        return c.difficulty.toLowerCase().includes('advanced');
      }
      return false;
    });

    let total = 0;
    let completed = 0;

    matchingCourses.forEach(course => {
      const courseTotal = course.chapters ? course.chapters.length : 0;
      total += courseTotal;
      const prog = getCourseProgress(course.id, courseTotal);
      completed += prog.completed;
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }

  function saveQuizResult(courseId, lessonNum, score, total) {
    const key = makeLessonKey(courseId, lessonNum);
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
      const results = raw ? JSON.parse(raw) : {};
      results[key] = { score, total, date: Date.now() };
      localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(results));
    } catch (e) {
      console.error('Error saving quiz result:', e);
    }
  }

  function getQuizResult(courseId, lessonNum) {
    const key = makeLessonKey(courseId, lessonNum);
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
      const results = raw ? JSON.parse(raw) : {};
      return results[key] || null;
    } catch (e) {
      return null;
    }
  }

  function getAllQuizStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
      const results = raw ? JSON.parse(raw) : {};
      const keys = Object.keys(results);
      let totalScore = 0;
      let totalQuestions = 0;
      keys.forEach(k => {
        totalScore += results[k].score || 0;
        totalQuestions += results[k].total || 1;
      });
      const avg = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;
      return { totalQuizzes: keys.length, averageScore: avg };
    } catch (e) {
      return { totalQuizzes: 0, averageScore: 0 };
    }
  }

  function setLastVisited(courseId, lessonNum) {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_VISITED, JSON.stringify({
        courseId,
        lessonNum,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.error('Error saving last visited:', e);
    }
  }

  function getLastVisited() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LAST_VISITED);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function resetAllProgress() {
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_LESSONS);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_RESULTS);
    localStorage.removeItem(STORAGE_KEYS.LAST_VISITED);
  }

  return {
    getCompletedLessons,
    isLessonCompleted,
    toggleLessonCompletion,
    markLessonComplete,
    getCourseProgress,
    getOverallProgress,
    getLevelProgress,
    saveQuizResult,
    getQuizResult,
    getAllQuizStats,
    setLastVisited,
    getLastVisited,
    resetAllProgress,
    makeLessonKey
  };
})();

if (typeof window !== 'undefined') {
  window.ProgressTracker = ProgressTracker;
}
