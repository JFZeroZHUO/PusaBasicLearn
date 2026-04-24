<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>📝 第1周作业提交</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：30分钟</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="🎯 作业要求">
          <div class="assignment-box">
            <h2>基础作业1</h2>
            <p class="assignment-desc">完成一个带背景音乐+音效的短视频</p>
          </div>
        </ContentSection>

        <ContentSection title="📋 作业清单">
          <div class="checklist">
            <div class="checklist-item">
              <span class="checkbox">☐</span>
              <div class="item-content">
                <h4>出4张图</h4>
                <p>使用即梦AI生成4张讲述一个完整故事的图片，风格统一，画面连贯</p>
              </div>
            </div>
            <div class="checklist-item">
              <span class="checkbox">☐</span>
              <div class="item-content">
                <h4>生成视频片段</h4>
                <p>使用图生视频工具将4张图片转化为视频片段（每个3-5秒）</p>
              </div>
            </div>
            <div class="checklist-item">
              <span class="checkbox">☐</span>
              <div class="item-content">
                <h4>剪辑视频</h4>
                <p>使用剪映将4个片段剪辑成一段完整的短视频（15-30秒）</p>
              </div>
            </div>
            <div class="checklist-item">
              <span class="checkbox">☐</span>
              <div class="item-content">
                <h4>添加音乐</h4>
                <p>添加背景音乐，让画面变化配合音乐节奏</p>
              </div>
            </div>
            <div class="checklist-item">
              <span class="checkbox">☐</span>
              <div class="item-content">
                <h4>添加音效</h4>
                <p>添加适当的音效（环境音、动作音、转场音等）增强体验</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="📤 提交方式">
          <p>请完成以下<strong>两个</strong>提交步骤：</p>

          <div class="submit-steps">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>在学习群提交</h4>
                <p>在入门学习群里发送您的视频，并添加话题：</p>
                <div class="code-box">#基础作业1</div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>填写提交表单</h4>
                <p>点击下方按钮，或复制链接到浏览器打开：</p>
                <a
                  href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf"
                  target="_blank"
                  class="btn btn-primary"
                >
                  打开提交表单 →
                </a>
                <p class="form-link">
                  https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="⭐ 作业评分标准">
          <div class="grading-criteria">
            <div class="criteria-item">
              <h4>故事完整性（30分）</h4>
              <p>4个画面能够讲述一个完整的故事，有开头、发展、高潮、结尾</p>
            </div>
            <div class="criteria-item">
              <h4>画面质量（25分）</h4>
              <p>图片清晰，风格统一，构图合理</p>
            </div>
            <div class="criteria-item">
              <h4>视频流畅度（25分）</h4>
              <p>视频片段过渡自然，运动流畅</p>
            </div>
            <div class="criteria-item">
              <h4>音效运用（20分）</h4>
              <p>背景音乐选择恰当，音效使用合理</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="💡 作业提示">
          <div class="tips-box">
            <h4>✅ 做得好：</h4>
            <ul>
              <li>画面风格统一，色调一致</li>
              <li>故事简单但完整，逻辑清晰</li>
              <li>音乐节奏与画面变化配合</li>
              <li>有创意的转场和音效运用</li>
            </ul>
          </div>

          <div class="tips-box warning">
            <h4>⚠️ 常见问题：</h4>
            <ul>
              <li>画面风格差异大 → 使用同一艺术家关键词</li>
              <li>视频闪烁变形 → 降低运动强度</li>
              <li>音乐和画面不配 → 重新选择匹配的音乐</li>
              <li>时长过长或过短 → 控制在15-30秒</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection title="🎁 完成奖励">
          <p>完成作业后，您将获得：</p>
          <ul>
            <li>✅ 解锁第2周课程（AI音乐基础）</li>
            <li>✅ 获得社团学习积分</li>
            <li>✅ 优秀作品将在社团展示</li>
            <li>✅ 获得老师和同学的反馈建议</li>
          </ul>
        </ContentSection>

        <ContentSection title="❓ 常见问题">
          <p><strong>Q: 作业可以多次提交吗？</strong></p>
          <p>A: 可以！您可以不断改进作品，重新提交。我们会以最后一次提交为准。</p>

          <p><strong>Q: 如果作业不理想怎么办？</strong></p>
          <p>A: 没关系！这是第一次作业，重在参与。我们会给予详细的反馈意见，帮助您改进。</p>

          <p><strong>Q: 可以使用别人的作品吗？</strong></p>
          <p>A: 不可以。所有作品必须是您自己原创或使用AI工具生成的。我们会检测原创性。</p>
        </ContentSection>

        <div class="lesson-actions">
          <a
            href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf"
            target="_blank"
            class="btn btn-primary"
          >
            📝 提交作业
          </a>
          <button @click="markComplete" class="btn btn-outline" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已完成' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/visualLanguage" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week2/overview" class="btn btn-primary">进入第2周 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'

const router = useRouter()
const progressStore = useProgressStore()
const isLoading = ref(false)

const goBack = () => {
  router.push('/week1/overview')
}

const markComplete = async () => {
  isLoading.value = true
  await progressStore.completeLesson('week1', 'assignment')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';

.assignment-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
}

.assignment-box h2 {
  margin: 0 0 10px 0;
  font-size: 28px;
}

.assignment-desc {
  font-size: 18px;
  opacity: 0.9;
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checklist-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  align-items: flex-start;
}

.checkbox {
  font-size: 24px;
  color: var(--primary-color);
}

.item-content h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.item-content p {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.submit-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
}

.code-box {
  background: #000;
  color: #52c41a;
  padding: 10px 15px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  margin-top: 10px;
  display: inline-block;
}

.form-link {
  font-size: 12px;
  color: var(--text-secondary);
  word-break: break-all;
  margin-top: 10px;
}

.grading-criteria {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.criteria-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.criteria-item h4 {
  margin: 0 0 8px 0;
  font-size: 15px;
}

.criteria-item p {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.tips-box {
  padding: 15px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 8px;
  margin-bottom: 15px;
}

.tips-box.warning {
  background: #fffbe6;
  border-color: #ffe58f;
}

.tips-box h4 {
  margin: 0 0 10px 0;
  font-size: 15px;
}

.tips-box ul {
  margin: 0;
  padding-left: 20px;
}

.tips-box li {
  margin-bottom: 8px;
  font-size: 14px;
}

.tips-box li:last-child {
  margin-bottom: 0;
}
</style>
