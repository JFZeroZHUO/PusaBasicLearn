import lapianSourceHtml from '../../../ai_studio_code (3).html?raw'
import lapianShotImage from '../../../image1.png'
import lapianBannerImage from '../../../image2.png'
import lapianPracticeVideo from '../../../拉片实操视频2.mp4'

const lapianStyle = lapianSourceHtml.match(/<style[^>]*>[\s\S]*?<\/style>/i)?.[0] || ''
const lapianBody = lapianSourceHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || lapianSourceHtml
const lapianBodyNoTextBlock = lapianBody.replace(/<div class="black-img-text">[\s\S]*?<\/div>\s*/i, '')
const lapianBodyWithAllImages = lapianBodyNoTextBlock
  .replace(
    '[电影特写截图]',
    `<img src="${lapianShotImage}" alt="电影特写截图" style="width:100%;height:auto;object-fit:contain;border-radius:8px;display:block;" />`
  )
  .replace(
    '[图片：这才这是电影真正的样子（胶片背景图）]',
    `<img src="${lapianBannerImage}" alt="这才是电影真正的样子" style="width:100%;height:auto;display:block;border-radius:8px;" />`
  )
  .replace(
    '[截图：飞书表格工具使用界面演示]',
    `<video src="${lapianPracticeVideo}" controls preload="metadata" style="width:100%;height:auto;display:block;border-radius:8px;background:#000;object-fit:contain;"></video>`
  )
  .replace(
    '[视频封面图：AI 影像课程 - 1]',
    `<div style="background:#ffffff;border:1px solid #c2d1ff;border-left:4px solid #3370ff;border-radius:10px;padding:18px 20px;">
      <p style="margin:0 0 10px 0;color:#1f2329;font-size:1.05rem;font-weight:800;">📚 课程学习资料</p>
      <p style="margin:0;color:#475569;line-height:1.8;">
        直播回放：
        <a href="https://fclive.pandacollege.cn/s/1OZUz" target="_blank" rel="noopener" style="color:#3370ff;font-weight:700;text-decoration:none;border-bottom:1px dashed #93c5fd;">
          https://fclive.pandacollege.cn/s/1OZUz
        </a>
      </p>
    </div>`
  )

const week4ScopedStyle = `
<style>
  .week4-lapian-wrap {
    width: 100%;
    /* 对齐非 customHtml 章节的正文比例：左10% / 内容70% / 右20% */
    padding-left: calc(10% - 32px);
    padding-right: calc(20% - 88px);
  }
  .week4-lapian-wrap .feishu-container {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: transparent !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .week4-lapian-wrap body {
    background-color: transparent !important;
    padding: 0 !important;
  }
  .week4-lapian-wrap .black-img-mock > div:last-child {
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    overflow: hidden;
    width: 100% !important;
    height: auto !important;
  }
  .week4-lapian-wrap .black-img-mock {
    background: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 18px 0 !important;
  }
  .week4-lapian-wrap .img-placeholder:has(> img),
  .week4-lapian-wrap .img-placeholder:has(> video),
  .week4-lapian-wrap .img-placeholder:has(> div) {
    padding: 0 !important;
    border: none !important;
    background: transparent !important;
  }
  @media (max-width: 768px) {
    .week4-lapian-wrap {
      padding-left: 0;
      padding-right: 0;
    }
    .week4-lapian-wrap .feishu-container {
      padding: 0 !important;
    }
  }
</style>
`

const buildWeek4CustomHtml = (body) => `${week4ScopedStyle}
${lapianStyle}
<div class="week4-lapian-wrap">
${body}
</div>`

const lesson2Heading = '<h2>🎯 补课任务 3：看别人拉片子</h2>'
const lesson2HeadingNew = '<h2>🎯 你有没有看过《寄生虫》的拉片？</h2>'
const lesson2TaskTitle = '🎈 作业 2：11月30日，周日前完成（无需提交）'
const lesson2TaskTitleNew = '🎈 强烈推荐观看，了解一部好的片子，到底好在哪'
const lesson3Heading = '<h2>🚩 选修：视听语言入门基础</h2>'
const lessonSplitIndex = lapianBodyWithAllImages.indexOf(lesson2Heading)
const week4Lesson1Body =
  lessonSplitIndex >= 0
    ? lapianBodyWithAllImages.slice(0, lessonSplitIndex)
    : lapianBodyWithAllImages
const week4Lesson2Source =
  lessonSplitIndex >= 0
    ? lapianBodyWithAllImages
        .slice(lessonSplitIndex)
        .replace(lesson2Heading, lesson2HeadingNew)
        .replace(lesson2TaskTitle, lesson2TaskTitleNew)
    : `<h2>🎯 补课任务 3：看别人拉片子</h2><p>暂无内容，请稍后补充。</p>`
const lesson3SplitIndex = week4Lesson2Source.indexOf(lesson3Heading)
const week4Lesson2Body =
  lesson3SplitIndex >= 0
    ? week4Lesson2Source.slice(0, lesson3SplitIndex)
    : week4Lesson2Source
const week4Lesson3Source =
  lesson3SplitIndex >= 0
    ? week4Lesson2Source.slice(lesson3SplitIndex)
    : `<h2>🚩 选修：视听语言入门基础</h2><p>暂无内容，请稍后补充。</p>`
const lesson4Heading = '<h3>📺 视听语言的案例演示</h3>'
const lesson4SplitIndex = week4Lesson3Source.indexOf(lesson4Heading)
const week4Lesson3Body =
  lesson4SplitIndex >= 0
    ? week4Lesson3Source.slice(0, lesson4SplitIndex)
    : week4Lesson3Source
const week4Lesson4Body =
  lesson4SplitIndex >= 0
    ? week4Lesson3Source.slice(lesson4SplitIndex + lesson4Heading.length)
    : `<p>暂无内容，请稍后补充。</p>`

export const week4Chapters = [
  {
    id: 'week4-chapter1',
    number: 1,
    title: '第1课：视听语言-拉片小手册',
    icon: '🎞',
    customHtml: buildWeek4CustomHtml(week4Lesson1Body),
    chapterTask: {
      description: '我已完成第1课学习，并开始尝试拉片分析'
    }
  },
  {
    id: 'week4-chapter2',
    number: 2,
    title: '第2课：看别人拉片',
    icon: '🎬',
    customHtml: buildWeek4CustomHtml(week4Lesson2Body),
    chapterTask: {
      description: '我已完成第2课学习，并复盘优秀拉片案例'
    }
  },
  {
    id: 'week4-chapter3',
    number: 3,
    title: '第3课：菩萨老师来夯实你的视听语言入门基础',
    icon: '📘',
    customHtml: buildWeek4CustomHtml(week4Lesson3Body),
    chapterTask: {
      description: '我已完成第3课学习视听语言入门基础'
    }
  },
  {
    id: 'week4-chapter4',
    number: 4,
    title: '第4课：公开课-《7小时完成6位数AI视频商单全解密》',
    icon: '🎤',
    customHtml: buildWeek4CustomHtml(week4Lesson4Body),
    chapterTask: {
      description: '我已完成第4课学习，并理解公开课中的商单方法'
    }
  }
]
