<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goHome" class="back-btn">← 返回首页</button>

      <div class="lesson-header card">
        <h1>🎞 第4周：视听语言-拉片</h1>
        <p class="lesson-subtitle">从观众到创作者的进阶之路</p>
        <p class="lesson-meta">
          <span>📖 预计时长：约1.5小时</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="🎯 学习目标">
          <p>本周您将学习"拉片"这一核心技能，从观众的视角转变为创作者的视角，真正学会如何"看"电影。</p>
        </ContentSection>

        <ContentSection title="📋 本周课程">
          <div class="lesson-list">
            <router-link
              v-for="(lesson, index) in weekLessons"
              :key="lesson.id"
              :to="`/week4/${lesson.id}`"
              class="lesson-item"
            >
              <span class="lesson-number">{{ index + 1 }}</span>
              <div class="lesson-info">
                <h4>{{ lesson.title }}</h4>
                <p class="lesson-meta">
                  <span>⏱️ {{ lesson.duration }}分钟</span>
                </p>
              </div>
              <span class="lesson-arrow">→</span>
            </router-link>
          </div>
        </ContentSection>

        <ContentSection title="💡 什么是拉片？">
          <p><strong>"拉片"源于胶片时代，剪辑师需要用手拉动胶片，一格一格地审视画面。</strong></p>
          <p>放到今天，拉片就是把一部电影彻底"拆"开。不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影拆解成几百、上千个独立的镜头。</p>
          <p><strong>如果说看电影是欣赏一座宏伟的建筑，那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</strong></p>
        </ContentSection>

        <ContentSection title="🚀 为什么要拉片？">
          <p>如果你在Netflix或电影院看了一千部电影，你能成为导演吗？</p>
          <p>❌ 观众看电影，是在"消费"情感</p>
          <p>✅ 创作者看电影，是在"解剖"技术</p>
          <p><strong>想从"吃货"变成"厨师"，你需要掌握「拉片」技能！</strong></p>
        </ContentSection>

        <ContentSection title="📚 课程详细内容">
          <div class="course-detail">
            <h3>补课任务1：认识拉片</h3>
            <p class="highlight-text">做了1000个小视频，为什么你还做不出一个电影高级感的片子</p>
            <p>🎈 在这里，读懂影像的秘密</p>

            <h4>01 你真的"看懂"电影了吗？</h4>
            <p>我们先来做一个思想实验：</p>
            <p>如果你去米其林餐厅吃了一千顿饭，你觉得自己能成为特级厨师吗？</p>
            <p class="emphasis">大概率不能。你只会成为一个挑剔的美食家。</p>

            <p>同样的道理：</p>
            <p>如果你在Netflix或电影院看了一千部电影，你能成为导演（哪怕是拍好Vlog的博主）吗？</p>
            <p class="emphasis">也不能。</p>

            <p>❌ <strong>观众看电影，是在"消费"情感。</strong></p>
            <p>你会哭、会笑、会紧张，完全被剧情牵着鼻子走。</p>

            <p>✅ <strong>创作者看电影，是在"解剖"技术。</strong></p>
            <p>他们冷酷无情，他们不再关心主角会不会死，他们只关心——刚才那个镜头，为什么要用广角？</p>

            <div class="insight-box">
              <p>💡 <strong>想从"吃货"变成"厨师"，你需要掌握一项核心技能。</strong></p>
              <p>在电影圈，它有一个听起来很复古的名字——「拉片」。</p>
            </div>

            <h4>02 什么是"拉片"？Lā Piàn</h4>
            <p>"拉片"这个词，听起来很物理。</p>
            <p>它的确源于物理动作：在胶片时代，剪辑师需要在剪辑台上，用手拉动胶片，一格一格地审视画面。</p>

            <p>放到今天，拉片的定义非常简单粗暴：</p>
            <p class="emphasis"><strong>把一部电影彻底"拆"开。</strong></p>

            <p>不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影拆解成几百、上千个独立的镜头。</p>

            <p>如果说看电影是欣赏一座宏伟的建筑，那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</p>

            <h4>03 拉片，到底在"拉"什么？</h4>
            <p>当你开始拉片，你的手边不再是爆米花，而是Excel表格。</p>
            <p>你需要像做手术一样，记录下每一个镜头的详细参数：</p>

            <ul class="feature-list">
              <li>📏 <strong>景别</strong>：是怼脸的特写，还是宏大的远景？</li>
              <li>🎥 <strong>运镜</strong>：摄像机是推拉摇移，还是稳如泰山？</li>
              <li>💡 <strong>光影</strong>：光是从哪打过来的？是冷酷的蓝还是温暖的黄？</li>
              <li>🔊 <strong>声音</strong>：这里为什么要加一声沉闷的鼓点？</li>
              <li>✂️ <strong>剪辑</strong>：为什么在这个瞬间切到了下一个画面？</li>
            </ul>

            <h4>04 为什么要自讨苦吃？因为这是"偷师"的唯一捷径</h4>
            <p>这听起来是不是很枯燥？</p>
            <p>是的，非常枯燥。一部90分钟的电影，可能需要你花10个小时去拉片。</p>
            <p>但为什么所有电影学院的学生、所有大导演，都要死磕这件事？</p>
            <p class="emphasis">因为这是"偷师"的唯一捷径！</p>

            <h4>05 写在最后</h4>
            <p>从观众到创作者的转变，就从拉片开始。</p>
          </div>

          <div class="course-detail">
            <h3>补课任务2：自己拉片</h3>
            <h4>🎯 观看直播回放：【视频拉片解说】</h4>
            <p>（观看实际拉片演示）</p>

            <h4>🎯 实操拉片：【工具使用+拉片】</h4>
            <p>（动手实践拉片技巧）</p>
          </div>

          <div class="course-detail">
            <h3>补课任务3：看别人拉片子</h3>
            <p>（学习他人的拉片分析，提升自己的分析能力）</p>
          </div>
        </ContentSection>

        <ContentSection title="✅ 完成本周后，您将掌握">
          <ul>
            <li>✓ 理解拉片的概念和意义</li>
            <li>✓ 掌握拉片的基本方法和步骤</li>
            <li>✓ 学会从创作者视角分析影片</li>
            <li>✓ 能够独立完成简单的拉片分析</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <router-link to="/week4/mindset" class="btn btn-primary">
            开始第一课时 →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ContentSection from '../../components/ContentSection.vue'
import Accordion from '../../components/Accordion.vue'
import { curriculum } from '../../assets/data/curriculum'

const router = useRouter()
const weekLessons = curriculum.find(w => w.id === 'week4').lessons

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
@import '../Week1/lesson-common.css';
</style>
