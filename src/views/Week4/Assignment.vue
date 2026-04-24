<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>🎓 第4周作业 & 课程总结</h1>
        <p class="lesson-meta">
          <span>🎉 恭喜您完成所有课程！</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="🎯 最终作业">
          <div class="final-assignment">
            <h2>拉片分析作业</h2>
            <p>选择一部短片或电影片段（1-2分钟），进行完整的拉片分析</p>
          </div>
        </ContentSection>

        <ContentSection title="📋 作业要求">
          <div class="requirements">
            <ol>
              <li>选择分析对象（可以是任何影片片段）</li>
              <li>记录每个镜头的景别、角度、运镜</li>
              <li>分析镜头的剪辑节奏</li>
              <li>分析视听配合（音乐、音效）</li>
              <li>总结这段影像的技巧和效果</li>
            </ol>
          </div>
        </ContentSection>

        <ContentSection title="✅ 提交内容">
          <ul>
            <li>影片名称和时间戳</li>
            <li>拉片记录表（至少10个镜头）</li>
            <li>分析总结（300字以上）</li>
            <li>可选：您的拉片视频或图片</li>
          </ul>
        </ContentSection>

        <ContentSection title="📤 提交方式">
          <p>在学习群提交您的拉片分析，老师会给予反馈。</p>
        </ContentSection>

        <ContentSection title="🎊 课程完成">
          <div class="completion-box">
            <h2>🎉 恭喜您完成新手村所有课程！</h2>
            <p>经过4周的学习，您已经掌握了：</p>
            <div class="achievements">
              <div class="achievement">
                <span class="icon">🎨</span>
                <span>AI出图与视频生成</span>
              </div>
              <div class="achievement">
                <span class="icon">✂️</span>
                <span>视频剪辑基础</span>
              </div>
              <div class="achievement">
                <span class="icon">🎵</span>
                <span>AI音乐创作</span>
              </div>
              <div class="achievement">
                <span class="icon">📐</span>
                <span>景别与运镜</span>
              </div>
              <div class="achievement">
                <span class="icon">🎬</span>
                <span>视听语言与拉片</span>
              </div>
              <div class="achievement">
                <span class="icon">✨</span>
                <span>完整的AI视频创作能力</span>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="🚀 下一步学习">
          <p>完成新手村后，您可以：</p>
          <ul>
            <li>加入进阶学习群，继续提升技能</li>
            <li>参与社团项目，与其他成员合作创作</li>
            <li>参加社团比赛，展示您的作品</li>
            <li>分享学习心得，帮助新成员成长</li>
          </ul>
        </ContentSection>

        <ContentSection title="💬 结语">
          <div class="message-box">
            <p>亲爱的同学，</p>
            <p>恭喜您完成了新手村的所有学习任务！在这4周里，您从零开始，系统学习了AI视频创作的完整流程。</p>
            <p>记住，这只是开始。真正的成长来自于不断的实践和创作。保持创作的热情，持续学习，相信您一定能成为一名优秀的AI视频创作者！</p>
            <p class="signature">—— 风变野菩萨AI视频社团</p>
          </div>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">
            ✅ 完成全部课程
          </button>
          <button @click="goHome" class="btn btn-outline">
            🏠 返回首页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'

const router = useRouter()
const progressStore = useProgressStore()

const goBack = () => router.push('/week4/overview')
const goHome = () => router.push('/')
const markComplete = () => progressStore.completeLesson('week4', 'assignment')
</script>

<style scoped>
@import '../Week1/lesson-common.css';

.final-assignment {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
}

.final-assignment h2 {
  margin: 0 0 15px 0;
  font-size: 28px;
}

.requirements {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.requirements ol {
  margin: 0;
  padding-left: 20px;
}

.requirements li {
  margin-bottom: 12px;
  line-height: 1.6;
}

.completion-box {
  padding: 30px;
  background: #f6ffed;
  border: 2px solid #b7eb8f;
  border-radius: 12px;
  text-align: center;
}

.completion-box h2 {
  margin: 0 0 20px 0;
  font-size: 26px;
  color: var(--success-color);
}

.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.achievement {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border: 2px solid #b7eb8f;
}

.achievement .icon {
  font-size: 32px;
}

.message-box {
  padding: 25px;
  background: #f0f5ff;
  border-left: 4px solid var(--primary-color);
  border-radius: 8px;
  line-height: 1.8;
}

.message-box p {
  margin-bottom: 12px;
}

.signature {
  text-align: right;
  font-weight: 600;
  color: var(--primary-color);
  margin-top: 20px;
}

.lesson-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
