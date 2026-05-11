function cloneChapter(chapter) {
  return JSON.parse(JSON.stringify(chapter))
}

export function createIndependentWeekData(baseWeekChapters, week4Chapters) {
  const week1Data = (baseWeekChapters || [])
    .filter(ch => [`chapter1`, `chapter2`, `chapter3`, `chapter4`, `chapter5`, `chapter6`, `chapter7`].includes(ch.id))
    .map(cloneChapter)

  const chapter1 = week1Data.find(ch => ch.id === `chapter1`)
  const week2Data = chapter1
    ? [
        {
          ...cloneChapter(chapter1),
          id: `week2-chapter1`,
          number: 1,
          title: `第1课：AI音乐-视频的灵魂`,
          icon: `🎵`,
          learningIntro: ``,
          chapterTask: {
            description: `我已经学会用suno来生成一首音乐啦`
          }
        }
      ]
    : []

  const week3Data = (baseWeekChapters || [])
    .filter(ch => [`chapter8`, `chapter10`, `chapter9`].includes(ch.id))
    .map(cloneChapter)

  const week4Data = (week4Chapters || []).map(cloneChapter)

  return {
    week1Data,
    week2Data,
    week3Data,
    week4Data
  }
}
