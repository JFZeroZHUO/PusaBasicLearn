<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goHome" class="back-btn">← 返回首页</button>

      <div class="lesson-header card">
        <h1>🎧 第2周：AI音乐基础</h1>
        <p class="lesson-subtitle">让音乐成为视频的灵魂</p>
        <p class="lesson-meta">
          <span>📖 预计时长：约1.5小时</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="🎯 学习目标">
          <p>本周您将深入了解音乐在视频中的重要作用，并学会使用AI音乐工具（SUNO）创作原创音乐。</p>
        </ContentSection>

        <ContentSection title="📋 本周课程">
          <div class="lesson-list">
            <router-link
              v-for="(lesson, index) in weekLessons"
              :key="lesson.id"
              :to="`/week2/${lesson.id}`"
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

        <Accordion title="🎵 为什么要学习音乐？" icon="🎵" :defaultOpen="true">
          <div class="accordion-content-inner">
            <p><strong>音乐不是视频的"背景"，音乐是视频的"骨架"和"灵魂"。</strong></p>

            <h5>1. 情绪的"强行植入" (Emotion Injector)</h5>
            <p><strong>作用：</strong> 画面是客观的，音乐是主观的。同一个AI生成的"少女回眸"画面，配上恐怖音乐是《午夜凶铃》，配上轻快音乐是《初恋》，配上宏大交响乐是《史诗开篇》。</p>
            <p><strong>痛点：</strong> AI生成的画面往往缺乏微表情，眼神空洞。音乐能帮画面"撒谎"，强行赋予角色某种情绪，填补AI演技的不足。</p>

            <h5>2. 剪辑的"节拍器" (Rhythm & Pacing)</h5>
            <p><strong>作用：</strong> 音乐决定了剪辑点。鼓点密集时快剪，舒缓时慢镜头。</p>
            <p><strong>痛点：</strong> AI视频容易做得像"PPT轮播"。只有卡在音乐节拍上的转场，才能让一堆离散的AI生成片段变成一支流畅的"视频"。音乐提供了时间的连续性。</p>

            <h5>3. 瑕疵的"遮羞布" (The Glitch Hider)</h5>
            <p><strong>作用：</strong> 这是对AI视频<strong>最重要</strong>的一点。AI视频常有闪烁、形变、不连贯。</p>
            <p><strong>痛点：</strong> 当观众的听觉被高质量的音效（下雨声、脚步声、赛博朋克音效）和音乐抓住时，大脑会<strong>自动脑补</strong>画面的合理性，从而<strong>忽略视觉上的小瑕疵</strong>。好的声音能让 60 分的画面看起来像 80 分。</p>
          </div>
        </Accordion>

        <Accordion title="📚 课程详细内容" icon="📚">
          <div class="accordion-content-inner">
            <h5>基础：了解音乐风格、AI音乐提示词构成</h5>

            <h6>🎓 直播回放&教学资料（看视频！）</h6>
            <div class="video-resource">
              <p><strong>👨🏻‍🏫 jiafeng高嘉丰</strong></p>
              <p>🎯 <strong>音乐教学 1</strong></p>
              <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/jifzHD" target="_blank" rel="noopener">点击观看</a></p>
              <p>📝 【学员笔记】：高嘉丰老师11月30日（周日）（by：社团-皮皮咩同学）</p>
            </div>

            <div class="video-resource">
              <p><strong>👨🏻‍🏫 jiafeng高嘉丰</strong></p>
              <p>🎯 <strong>音乐教学 2</strong></p>
              <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/C07AJL" target="_blank" rel="noopener">点击观看</a></p>
              <p>📝 【学员笔记】：高嘉丰老师12月28日（周日）（by：皮皮咩）</p>
            </div>

            <h6>🎵 AI音乐工具：</h6>
            <p><strong>【推荐】</strong></p>
            <ul>
              <li>风变的SUNO，无需翻墙，直接使用：<a href="https://art.forchange.cn/suno" target="_blank" rel="noopener">https://art.forchange.cn/suno</a></li>
              <li>国际版的SUNO，需翻墙科学上网使用：<a href="https://suno.com/home" target="_blank" rel="noopener">https://suno.com/home</a></li>
            </ul>
            <p>→ SunoAI-宝藏提示词手册：<a href="https://sunoai-instrument.jfzero.top/" target="_blank" rel="noopener">https://sunoai-instrument.jfzero.top/</a></p>
            <p class="note">（菩萨老师给3个pdf文档，社团同学做成网站，供大家使用哦！）</p>

            <h6>🎓 课后作业（做作业！）</h6>
            <div class="assignment">
              <p><strong>✅ AI音乐-基础作业1（必做）：</strong></p>
              <p>创作一首<strong>含中文歌词的人声歌曲</strong>，需<strong>融合两种截然不同的音乐风格</strong>（如朋克+古典），文件名标注所使用的两种风格；</p>
              <ul>
                <li>在【群里】里，发你做的歌</li>
                <li>📝 同时提交到链接：<a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" rel="noopener">《补基础-AI音乐：用suno制作一首音乐》</a></li>
              </ul>
            </div>

            <div class="assignment elective">
              <p><strong>🎈 AI音乐-进阶作业1（选做，可做可不做）：</strong></p>
              <p>为《征服》中华强买瓜找茬至捅伤摊主的片段创作配乐</p>
              <ul>
                <li>仅提交配乐为基础要求</li>
                <li>若能提取片段人声并将自制配乐与视频结合呈现可加分，配乐风格可自由探索</li>
              </ul>
              <p>👉 《华强买瓜》视频：作业要求及素材《征服》片段</p>
              <p>在【野菩萨入门基础学习群】里，发你做的歌</p>
            </div>

            <h6>进阶1：了解如何改编歌曲</h6>
            <p>（进阶内容，探索更多音乐创作技巧）</p>
          </div>
        </Accordion>

        <ContentSection title="✅ 完成本周后，您将掌握">
          <ul>
            <li>✓ 理解音乐对视频情绪的塑造作用</li>
            <li>✓ 能够根据视频内容选择合适的音乐风格</li>
            <li>✓ 掌握SUNO等AI音乐工具的使用</li>
            <li>✓ 创作出适合自己视频的原创音乐</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <router-link to="/week2/musicTheory" class="btn btn-primary">
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
const weekLessons = curriculum.find(w => w.id === 'week2').lessons

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
@import '../Week1/lesson-common.css';
</style>
