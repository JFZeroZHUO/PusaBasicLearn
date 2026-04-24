<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goHome" class="back-btn">← 返回首页</button>

      <div class="lesson-header card">
        <h1>📹 第3周：景别&运镜</h1>
        <p class="lesson-subtitle">掌握镜头语言的核心</p>
        <p class="lesson-meta">
          <span>📖 预计时长：约1.5小时</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="🎯 学习目标">
          <p>本周将深入学习景别分类和运镜技巧，掌握核心公式，提升AI绘画和视频的镜头表现力。</p>
        </ContentSection>

        <ContentSection title="📋 本周课程">
          <div class="lesson-list">
            <router-link
              v-for="(lesson, index) in weekLessons"
              :key="lesson.id"
              :to="`/week3/${lesson.id}`"
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

        <ContentSection title="🎯 核心公式">
          <PromptCard
            title="景别提示词公式"
            prompt="Photography by（艺术家），（机位、景别），主体，环境"
            description="这是AI绘画景别的黄金公式！"
          />
        </ContentSection>

        <ContentSection title="📚 课程详细内容">
          <div class="course-detail">
            <h3>基础1：景别 & 运镜</h3>

            <h4>🎯 观看直播回放：【视频拉片解说】</h4>
            <div class="video-resource">
              <p><strong>👨🏻‍🏫 滋滋老师</strong></p>
              <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/rYNX8h" target="_blank" rel="noopener">点击观看</a></p>
              <p>📝 【学员笔记】：滋滋老师：9月24日（周三）（by：皮皮咩同学）</p>
            </div>

            <h4>🎈 基础任务1：</h4>
            <p>任选1个景别镜头角度，生成一张"好看"的图片，提交到表单里，同时发【基础入门学习群】</p>
            <p>→ 提交到《补基础：景别镜头图》：<a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" rel="noopener">点击提交</a></p>
            <div class="tip-box">
              <p>💡 <strong>温馨提示：</strong></p>
              <p>大家提交上来的图片，我们将会经过挑选，作为景别的课程案例，收录到社团手册里！</p>
              <p>若你的图片作业被被选中，将会额外得到一个小小的10次MJ小奖励哦！</p>
            </div>

            <h4>📋 核心公式 - 基础句式</h4>
            <PromptCard
              title="景别提示词公式"
              prompt="Photography by（艺术家），（机位、景别），主体，环境"
              description="这是AI绘画景别的黄金公式！"
            />

            <h5>景别分类表</h5>

            <h6>第三招：镜头与构图</h6>
            <table class="shot-table">
              <thead>
                <tr>
                  <th>板块/大类</th>
                  <th>子分类</th>
                  <th>英文提示词 (Prompt)</th>
                  <th>中文/备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="4">远的/天文</td>
                  <td></td>
                  <td>Astrography</td>
                  <td>天文摄影</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Astro photography</td>
                  <td>天文摄影</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Shot by NASA</td>
                  <td>NASA拍摄风格</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Shot by hubble space telescope</td>
                  <td>哈勃望远镜拍摄风格</td>
                </tr>
                <tr>
                  <td rowspan="3">微距/显微</td>
                  <td></td>
                  <td>Macrography</td>
                  <td>显微摄影</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Micro photography</td>
                  <td>显微摄影</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Macroview</td>
                  <td>微距视野</td>
                </tr>
                <tr>
                  <td rowspan="5">景别表 (通用)</td>
                  <td>远景</td>
                  <td>extreme long shot</td>
                  <td>极远景镜头</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Telephoto shots</td>
                  <td>远景镜头 (长焦)</td>
                </tr>
                <tr>
                  <td></td>
                  <td>long shot</td>
                  <td>远景镜头</td>
                </tr>
                <tr>
                  <td>中近景</td>
                  <td>medium shot</td>
                  <td>中景镜头</td>
                </tr>
                <tr>
                  <td></td>
                  <td>close-up</td>
                  <td>特写镜头</td>
                </tr>
                <tr>
                  <td></td>
                  <td>extreme close-up</td>
                  <td>极特写镜头</td>
                </tr>
                <tr>
                  <td rowspan="9">景别表 (人物)</td>
                  <td rowspan="3">全身/半身</td>
                  <td>Full-body shot</td>
                  <td>全身照</td>
                </tr>
                <tr>
                  <td>Half-body shot</td>
                  <td>半身照</td>
                </tr>
                <tr>
                  <td>waistup shot</td>
                  <td>腰部特写</td>
                </tr>
                <tr>
                  <td rowspan="6">局部/特写</td>
                  <td>side shot</td>
                  <td>侧面照</td>
                </tr>
                <tr>
                  <td>Portrait</td>
                  <td>肖像照</td>
                </tr>
                <tr>
                  <td>Back shot</td>
                  <td>背影照</td>
                </tr>
                <tr>
                  <td>Headshot</td>
                  <td>头部特写 (图片注：不推荐使用)</td>
                </tr>
                <tr>
                  <td>Back neck shot</td>
                  <td>颈部特写</td>
                </tr>
                <tr>
                  <td>Collarbone shot</td>
                  <td>锁骨特写</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Hand shot</td>
                  <td>手部特写</td>
                </tr>
                <tr>
                  <td rowspan="4">景别表 (特殊/视角)</td>
                  <td rowspan="4">广角/全景</td>
                  <td>Wide angle</td>
                  <td>广角</td>
                </tr>
                <tr>
                  <td>Ultra-wide angle</td>
                  <td>超广角</td>
                </tr>
                <tr>
                  <td>Panorama</td>
                  <td>全景</td>
                </tr>
                <tr>
                  <td>360 panorama</td>
                  <td>360度全景</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="course-detail">
            <h3>基础2：AI 运镜</h3>
            <p>（学习AI运镜技巧和提示词）</p>
          </div>
        </ContentSection>

        <ContentSection title="✅ 完成本周后，您将掌握">
          <ul>
            <li>✓ 理解各种景别的使用场景</li>
            <li>✓ 掌握景别提示词的核心公式</li>
            <li>✓ 了解天文摄影和显微摄影技巧</li>
            <li>✓ 掌握AI运镜的提示词</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <router-link to="/week3/shotsBasic" class="btn btn-primary">
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
import PromptCard from '../../components/PromptCard.vue'
import { curriculum } from '../../assets/data/curriculum'

const router = useRouter()
const weekLessons = curriculum.find(w => w.id === 'week3').lessons

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
@import '../Week1/lesson-common.css';
</style>
