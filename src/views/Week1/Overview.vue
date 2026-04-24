<template>
  <div class="lesson-page redesigned">
    <div class="container">
      <button @click="goHome" class="back-btn">← 返回首页</button>

      <!-- 英雄区 -->
      <HeroSection />

      <!-- 任务区域 -->
      <div class="task-section">
        <h2 class="section-title">🚀 任务1：你的第一个AI视频</h2>

        <!-- 步骤1: 出图 -->
        <TaskCard
          step-number="1"
          step-label="步骤 1"
          title="用4张图讲一个故事"
          subtitle="学习AI绘画，生成讲述完整故事的4张图片"
          :default-open="true"
          objective="学会使用AI工具生成4张风格统一、画面连贯的图片，讲述一个简短的故事。这是AI视频创作的基础，也是最重要的一步。"
          :success-criteria="[
            '生成4张图片，讲述有开头、发展、高潮、结尾的完整故事',
            '角色造型、场景风格保持一致',
            '画面运用不同景别（远景、中景、特写等）创造节奏'
          ]"
          :resources="step1Resources"
          :practice-steps="step1Practice"
        />

        <!-- 步骤2: 图生视频 -->
        <TaskCard
          step-number="2"
          step-label="步骤 2"
          title="让图片动起来"
          subtitle="将4张图片转化为流畅的视频片段"
          :default-open="false"
          objective="使用AI视频生成工具（即梦、可灵等），将第1步生成的4张图片转化为流畅的视频片段。理解图生视频的基本原理和操作方法。"
          :success-criteria="[
            '成功生成4个视频片段',
            '视频片段流畅，无明显卡顿',
            '理解首尾帧的概念和应用'
          ]"
          :resources="step2Resources"
          :practice-steps="step2Practice"
        />

        <!-- 步骤3: 视频剪辑 -->
        <TaskCard
          step-number="3"
          step-label="步骤 3"
          title="加上音乐和音效"
          subtitle="用剪映完成最终作品"
          :default-open="false"
          objective="使用剪映将4个视频片段剪辑成一支完整的短视频，并添加背景音乐和音效。学会基础的视频剪辑操作和节奏把控。"
          :success-criteria="[
            '4个视频素材按故事线顺序排列',
            '视频素材卡在音乐节奏点上',
            '添加了背景音乐和转场音效',
            '最终视频时长15-60秒'
          ]"
          :resources="step3Resources"
          :practice-steps="step3Practice"
        />
      </div>

      <!-- 额外学习资源 -->
      <div class="resources-section">
        <h3 class="section-title">🎓 额外学习资源</h3>
        <p class="section-subtitle">完成主任务后，可以深入学习这些内容提升专业度</p>

        <div class="resource-cards">
          <!-- 摄影基础课 -->
          <div class="resource-card featured">
            <div class="resource-header">
              <div class="resource-icon">📸</div>
              <div class="resource-info">
                <h4>摄影基础课</h4>
                <div class="resource-tags">
                  <span class="tag recommended">推荐</span>
                  <span class="tag time">约1小时</span>
                </div>
              </div>
            </div>
            <p class="resource-description">
              掌握AI绘画的核心提示词技巧，学习摄影师的前四招和后三招，
              让你的AI生成画面更加专业和精致。
            </p>
            <div class="resource-benefits">
              <span>✨ 提升画面质量</span>
              <span>🎯 精准控制效果</span>
              <span>🎨 掌握专业术语</span>
            </div>
            <div class="resource-content-detail">
              <h5>课程内容：</h5>
              <ul>
                <li>🎓 摄影课基础：掌握AI绘画的核心提示词技巧</li>
                <li>📹 0622 摄影课提示词教学：摄影师的前四招</li>
                <li>📹 0625 摄影课提示词教学：摄影师的后三招</li>
                <li>📖 【提示词】摄影范式：摄影提示词结构范式</li>
              </ul>
              <div class="assignment-mini">
                <h6>📝 作业2：看完《摄影基础课》，尝试出2张图</h6>
                <ul>
                  <li>用Midjourney出一张"手视角"的图</li>
                  <li>用Midjourney出一张"双重曝光效果"的图</li>
                </ul>
                <div class="submit-steps-mini">
                  <p>1. 在入门群里发 <code>#基础作业2</code></p>
                  <p>2. 填写提交表单：</p>
                  <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" class="btn btn-primary btn-sm">
                    📝 提交作业2
                  </a>
                </div>
              </div>
            </div>
            <button class="btn btn-outline">开始学习 →</button>
          </div>

          <!-- 视听语言 -->
          <div class="resource-card">
            <div class="resource-header">
              <div class="resource-icon">🎬</div>
              <div class="resource-info">
                <h4>视听语言入门</h4>
                <div class="resource-tags">
                  <span class="tag elective">选修</span>
                  <span class="tag time">约2小时</span>
                </div>
              </div>
            </div>
            <p class="resource-description">
              像学外语一样学影像语言，理解镜头、剪辑、声音、色彩如何
              传递情感和意义。适合想深入学习的同学。
            </p>
            <div class="resource-content-detail">
              <h5>核心内容：</h5>
              <ul>
                <li>🎬 视听语言的拆解 —— 像学一门外语一样学影像</li>
                <li>📚 理论基石：电影符号学（麦茨）</li>
                <li>🎯 视听语言的三大构成（视听元素、场面调度、剪辑）</li>
                <li>📽️ 教学方法：追溯"电影史上的第一次"（案例教学）</li>
                <li>🎞️ 视听语言的案例演示</li>
              </ul>
            </div>
            <button class="btn btn-outline">查看课程 →</button>
          </div>
        </div>
      </div>

      <!-- 作业提交区 -->
      <div class="assignment-section">
        <h3 class="section-title">🏆 作业提交</h3>

        <div class="assignment-cards">
          <!-- 基础作业1 -->
          <div class="assignment-card primary">
            <div class="assignment-header">
              <div class="assignment-icon">📹</div>
              <div class="assignment-title">
                <h4>基础作业1：短视频作品</h4>
                <p class="assignment-status">你的第一个AI视频作品</p>
              </div>
              <div class="assignment-badge required">必修</div>
            </div>

            <div class="assignment-requirements">
              <h5>✅ 作业要求：</h5>
              <p><strong>基础作业1</strong> （根据教程-补基础：出图、出视频、剪辑）</p>
              <ol>
                <li>出4张图讲述一个故事或剧情</li>
                <li>生成 4 个片段视频</li>
                <li>最终剪辑出1个带背景音乐+音效的短视频</li>
              </ol>
            </div>

            <div class="assignment-submit">
              <h5>📤 提交方式：</h5>
              <div class="submit-steps">
                <div class="submit-step">
                  <span class="step-num">1</span>
                  <p>在入门群里发 <code>#基础作业1</code></p>
                </div>
                <div class="submit-step">
                  <span class="step-num">2</span>
                  <p>填写提交表单：</p>
                  <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" class="btn btn-primary">
                    📝 点击提交作业
                  </a>
                </div>
              </div>
            </div>

            <div class="assignment-tips">
              <h5>💡 剪辑要求：</h5>
              <p>对视频剪辑审美要求不高，确保会按基础剪辑步骤完成简单剪辑：</p>
              <ul>
                <li>✓ 先拖入视频素材，按故事线安排顺序放好</li>
                <li>✓ 找到合适的背景音乐</li>
                <li>✓ 对视频素材进行【变速】或【裁剪】处理，让视频素材能够卡在背景音乐的节奏点上</li>
                <li>✓ 最后添加一些【转场音效】或是【环境音效】</li>
              </ul>
              <p>剪辑后的小视频，发到【野菩萨入门基础学习群】里</p>
            </div>
          </div>

          <!-- 基础作业2 -->
          <div class="assignment-card secondary">
            <div class="assignment-header">
              <div class="assignment-icon">📸</div>
              <div class="assignment-title">
                <h4>基础作业2：摄影练习</h4>
                <p class="assignment-status">手视角 + 双重曝光效果</p>
              </div>
              <div class="assignment-badge required">必修</div>
            </div>

            <div class="assignment-requirements">
              <h5>✅ 作业要求：</h5>
              <ul>
                <li>用Midjourney出一张"手视角"的图</li>
                <li>用Midjourney出一张"双重曝光效果"的图</li>
              </ul>
            </div>

            <div class="assignment-tools">
              <h5>🎨 工具：</h5>
              <a href="https://art.forchange.cn/mj" target="_blank" class="btn btn-primary">
                🎨 打开风变MJ
              </a>
            </div>

            <div class="assignment-submit">
              <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" class="btn btn-outline">
                📝 提交作业
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 小技巧区 -->
      <div class="tips-section">
        <h3 class="section-title">💡 实用小技巧</h3>

        <div class="tips-grid">
          <!-- 出图技巧 -->
          <div class="tip-card">
            <h4>🎨 出图小技巧</h4>
            <ul>
              <li><strong>MJ里如何控制角色一致性？</strong></li>
              <li><strong>大力宗：MJ如何一次性批量出几十上百张图？</strong></li>
              <li><strong>绝妙的同构图设计，即梦是如何实现的？</strong></li>
            </ul>
          </div>

          <!-- 音乐技巧 -->
          <div class="tip-card">
            <h4>🎵 suno音乐小技巧</h4>
            <ul>
              <li><strong>王菲风格、萨顶顶风格的音乐，怎么写？</strong></li>
              <li><strong>歌词押韵怎么做？</strong></li>
            </ul>
          </div>

          <!-- 镜头设计 -->
          <div class="tip-card">
            <h4>🎬 视频镜头的设计思路</h4>
            <ul>
              <li><strong>四段式的镜头空间关系</strong></li>
              <li><strong>创作思维：整段视频的故事性主题，视频镜头应如何设计和串联</strong></li>
              <li><strong>快闪镜头的技巧和应用</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '../../components/HeroSection.vue'
import TaskCard from '../../components/TaskCard.vue'

const router = useRouter()

// 步骤1: 出图 - 学习资源
const step1Resources = [
  {
    type: 'required',
    badge: '必看',
    title: '如何用四个镜头，讲好一个故事',
    description: '学会故事构思和画面分解，这是AI视频创作的基础',
    duration: '15分钟',
    link: 'https://fclive.pandacollege.cn/p/2wrYTR',
    linkText: '▶️ 观看回放'
  },
  {
    type: 'important',
    badge: '必学',
    title: '即梦AI出图完整教程',
    description: '掌握即梦AI的出图、编辑、参考功能',
    links: [
      { url: 'https://fc0.cc/320e1t/1GZmM', label: '📹 视频教程' },
      { url: 'https://bytedance.larkoffice.com/docx/EkCsd3iGvoxUnExu0Q8ccGt3n6c?from=from_copylink', label: '📖 提示词手册' }
    ]
  },
  {
    type: 'optional',
    badge: '选修',
    title: '其他AI绘画工具',
    description: '如果你已有基础，可以使用其他工具',
    links: [
      { url: 'https://art.forchange.cn/mj', label: '🎨 风变MJ' },
      { url: 'https://fc0.cc/320e1t/1HB5Q', label: '📹 使用技巧' }
    ]
  },
  {
    type: 'optional',
    badge: '资料',
    title: '0806野菩萨课件',
    description: '风变MJ/悠船/midjourney的使用技巧',
    links: [
      { url: 'https://forchangesz.feishu.cn/wiki/DdDqwoRWwikYwkkRn8dcqSvWnJb', label: '📖 查看课件' }
    ]
  }
]

// 步骤1: 出图 - 实践步骤
const step1Practice = [
  {
    title: '构思你的故事',
    description: '从简单故事开始：一个角色的一天、一次冒险、一个发现。使用经典结构：起承转合',
    example: '清晨，一个小女孩发现窗台上有一只神秘的鸟 → 她跟随鸟儿来到森林 → 鸟儿变成了精灵 → 她们成为朋友',
    exampleLabel: '故事示例'
  },
  {
    title: '分解为4个画面',
    description: '将故事分解为4个镜头画面，运用不同景别创造节奏感',
    content: `
      <div class="shot-breakdown">
        <div class="shot-card">
          <span class="shot-number">1</span>
          <div class="shot-info">
            <strong>远景</strong>
            <p>交代环境</p>
          </div>
        </div>
        <div class="shot-card">
          <span class="shot-number">2</span>
          <div class="shot-info">
            <strong>中景</strong>
            <p>展示动作</p>
          </div>
        </div>
        <div class="shot-card">
          <span class="shot-number">3</span>
          <div class="shot-info">
            <strong>特写</strong>
            <p>强调情感</p>
          </div>
        </div>
        <div class="shot-card">
          <span class="shot-number">4</span>
          <div class="shot-info">
            <strong>特殊角度</strong>
            <p>收尾</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '开始生成图片',
    description: '打开AI工具，生成你的4张故事图。也可以直接使用公开课的作业。',
    actionLink: 'https://art.forchange.cn/mj',
    actionText: '🎨 打开风变MJ开始创作'
  }
]

// 步骤2: 图生视频 - 学习资源
const step2Resources = [
  {
    type: 'important',
    badge: '必学',
    title: '即梦-图生视频：教学基础1',
    description: '学习如何使用即梦将图片转化为视频',
    links: [
      { url: 'https://jimeng.jianying.com/', label: '🔗 即梦官网' }
    ]
  },
  {
    type: 'optional',
    badge: '了解',
    title: '可灵AI视频工具',
    description: '另一个强大的AI视频生成工具',
    links: [
      { url: 'https://app.klingai.com/cn/', label: '🔗 可灵官网' }
    ]
  },
  {
    type: 'optional',
    badge: '了解',
    title: '即梦/可灵首尾帧：教学基础2',
    description: '（不一定要用，但需要知道什么是首尾帧）首尾帧，就是用两张图，生成一段图1到图2的自然过渡视频'
  }
]

// 步骤2: 图生视频 - 实践步骤
const step2Practice = [
  {
    title: '准备你的4张图片',
    description: '确保第1步生成的4张图片故事连贯、风格统一',
    example: '检查角色造型是否一致、场景风格是否统一、画面质量是否清晰'
  },
  {
    title: '选择AI视频工具',
    description: '推荐使用即梦或可灵，将4张图片分别生成视频片段',
    content: `
      <p><strong>工具选择：</strong></p>
      <ul>
        <li>🎬 <strong>即梦</strong>：<a href="https://jimeng.jianying.com/" target="_blank">jimeng.jianying.com</a> - 操作简单，效果稳定</li>
        <li>🎬 <strong>可灵</strong>：<a href="https://app.klingai.com/cn/" target="_blank">app.klingai.com/cn/</a> - 功能强大，效果多样</li>
      </ul>
    `
  },
  {
    title: '生成4个视频片段',
    description: '将每张图片转化为5-10秒的视频片段',
    actionText: '继续生成视频'
  }
]

// 步骤3: 视频剪辑 - 学习资源
const step3Resources = [
  {
    type: 'required',
    badge: '必学',
    title: '剪映基础剪辑教程',
    description: '学习剪映的基本操作和剪辑技巧',
    duration: '20分钟',
    link: 'https://fclive.pandacollege.cn/p/1WE4uE',
    linkText: '▶️ 观看直播回放'
  },
  {
    type: 'important',
    badge: '工具',
    title: '剪映下载',
    description: '专业级视频剪辑工具，免费易用',
    links: [
      { url: 'https://www.capcut.cn/', label: '📥 下载剪映' }
    ]
  }
]

// 步骤3: 视频剪辑 - 实践步骤
const step3Practice = [
  {
    title: '安装并打开剪映',
    description: '下载并安装剪映，创建新项目',
    actionLink: 'https://www.capcut.cn/',
    actionText: '📥 下载剪映'
  },
  {
    title: '导入视频素材',
    description: '将第2步生成的4个视频片段按故事线顺序拖入时间线',
    example: '确保视频顺序符合你的故事逻辑：开头 → 发展 → 高潮 → 结尾'
  },
  {
    title: '添加背景音乐',
    description: '从剪映音乐库选择合适的背景音乐，或者使用SUNO生成原创音乐',
    content: `
      <p><strong>💡 小技巧：</strong></p>
      <ul>
        <li>选择与故事氛围匹配的音乐</li>
        <li>注意音乐的节奏，在节奏点上切换画面</li>
        <li>可以使用SUNO生成原创音乐（第2周会详细讲解）</li>
      </ul>
    `
  },
  {
    title: '调整视频节奏',
    description: '对视频素材进行【变速】或【裁剪】处理，让视频素材能够卡在背景音乐的节奏点上',
    example: '在鼓点处切换画面，在高潮处使用特写镜头'
  },
  {
    title: '添加音效',
    description: '最后添加一些【转场音效】或是【环境音效】，让视频更丰富',
    example: '添加脚步声、环境音、转场音效等'
  },
  {
    title: '导出并分享',
    description: '导出你的视频作品，发到【野菩萨入门基础学习群】里',
    actionText: '🎉 完成作品'
  }
]

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.lesson-page.redesigned {
  min-height: 100vh;
  padding: var(--spacing-lg, 24px);
  background: var(--bg-color, #f0f2f5);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.back-btn {
  background: none;
  border: none;
  font-size: 16px;
  color: var(--primary-color, #1890ff);
  cursor: pointer;
  margin-bottom: var(--spacing-lg, 24px);
  padding: 0;
  transition: all 0.3s ease;
}

.back-btn:hover {
  text-decoration: underline;
  transform: translateX(-4px);
}

/* 通用section样式 */
.task-section,
.resources-section,
.assignment-section,
.tips-section {
  background: white;
  border-radius: var(--radius-md, 12px);
  padding: var(--spacing-xl, 32px);
  margin-bottom: var(--spacing-xl, 32px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: var(--spacing-lg, 24px);
  color: var(--text-primary, #262626);
}

.section-subtitle {
  font-size: 16px;
  color: var(--text-secondary, #8c8c8c);
  margin-bottom: var(--spacing-lg, 24px);
}

/* 额外学习资源 */
.resource-cards {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--spacing-lg, 24px);
  overflow-x: auto;
}

.resource-card {
  border: 2px solid var(--border-color, #e8e8e8);
  border-radius: var(--radius-md, 12px);
  padding: var(--spacing-lg, 24px);
  transition: all 0.3s ease;
  min-width: 350px;
  flex-shrink: 0;
}

.resource-card:hover {
  border-color: var(--primary-color, #1890ff);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.1);
}

.resource-card.featured {
  border-color: var(--warning-color, #faad14);
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.02) 0%, rgba(250, 173, 20, 0.05) 100%);
}

.resource-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 16px);
  margin-bottom: var(--spacing-md, 16px);
}

.resource-icon {
  font-size: 40px;
}

.resource-info h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--spacing-xs, 8px);
}

.resource-tags {
  display: flex;
  gap: var(--spacing-xs, 8px);
}

.tag {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.tag.recommended {
  background: #fff7e6;
  color: #fa8c16;
}

.tag.elective {
  background: #f6ffed;
  color: #52c41a;
}

.tag.time {
  background: #e6f7ff;
  color: #1890ff;
}

.resource-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary, #8c8c8c);
  margin-bottom: var(--spacing-md, 16px);
}

.resource-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 12px);
  margin-bottom: var(--spacing-md, 16px);
}

.resource-benefits span {
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 13px;
}

.resource-content-detail {
  background: #fafafa;
  padding: var(--spacing-md, 16px);
  border-radius: var(--radius-sm, 8px);
  margin-bottom: var(--spacing-md, 16px);
}

.resource-content-detail h5 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: var(--spacing-sm, 12px);
}

.resource-content-detail ul {
  margin: 0;
  padding-left: var(--spacing-lg, 24px);
}

.resource-content-detail li {
  margin-bottom: var(--spacing-xs, 8px);
  font-size: 14px;
  line-height: 1.6;
}

.assignment-mini {
  background: white;
  padding: var(--spacing-md, 16px);
  border-radius: var(--radius-sm, 8px);
  margin-top: var(--spacing-md, 16px);
  border-left: 3px solid var(--warning-color, #faad14);
}

.assignment-mini h6 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: var(--spacing-sm, 12px);
}

.submit-steps-mini {
  margin-top: var(--spacing-sm, 12px);
}

.submit-steps-mini p {
  font-size: 13px;
  margin-bottom: var(--spacing-xs, 8px);
}

/* 作业提交区 */
.assignment-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-lg, 24px);
}

.assignment-card {
  border: 2px solid var(--border-color, #e8e8e8);
  border-radius: var(--radius-md, 12px);
  padding: var(--spacing-lg, 24px);
}

.assignment-card.primary {
  border-color: var(--primary-color, #1890ff);
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.02) 0%, rgba(24, 144, 255, 0.05) 100%);
}

.assignment-card.secondary {
  border-color: var(--warning-color, #faad14);
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.02) 0%, rgba(250, 173, 20, 0.05) 100%);
}

.assignment-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 16px);
  margin-bottom: var(--spacing-lg, 24px);
}

.assignment-icon {
  font-size: 40px;
}

.assignment-title h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--spacing-xs, 8px);
}

.assignment-status {
  font-size: 14px;
  color: var(--text-secondary, #8c8c8c);
  margin: 0;
}

.assignment-badge {
  margin-left: auto;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.assignment-badge.required {
  background: #ff4d4f;
  color: white;
}

.assignment-requirements,
.assignment-submit,
.assignment-tips,
.assignment-tools {
  background: white;
  padding: var(--spacing-md, 16px);
  border-radius: var(--radius-sm, 8px);
  margin-bottom: var(--spacing-md, 16px);
}

.assignment-requirements h5,
.assignment-submit h5,
.assignment-tips h5,
.assignment-tools h5 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: var(--spacing-sm, 12px);
}

.assignment-requirements ol,
.assignment-requirements ul {
  margin: 0;
  padding-left: var(--spacing-lg, 24px);
}

.assignment-requirements li {
  margin-bottom: var(--spacing-xs, 8px);
  line-height: 1.6;
}

.submit-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 12px);
}

.submit-step {
  display: flex;
  gap: var(--spacing-sm, 12px);
  align-items: flex-start;
}

.submit-step .step-num {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color, #1890ff);
  color: white;
  border-radius: 50%;
  font-size: 13px;
  font-weight: bold;
  flex-shrink: 0;
}

.submit-step p {
  margin: 0;
  font-size: 14px;
}

/* 小技巧区 */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg, 24px);
}

.tip-card {
  background: #f5f7fa;
  padding: var(--spacing-lg, 24px);
  border-radius: var(--radius-md, 12px);
  border-left: 4px solid var(--primary-color, #1890ff);
}

.tip-card h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--spacing-md, 16px);
}

.tip-card ul {
  margin: 0;
  padding-left: var(--spacing-lg, 24px);
}

.tip-card li {
  margin-bottom: var(--spacing-sm, 12px);
  font-size: 14px;
  line-height: 1.6;
}

.tip-card li strong {
  color: var(--text-primary, #262626);
}

/* 通用按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: var(--primary-color, #1890ff);
  color: white;
}

.btn-primary:hover {
  background: #40a9ff;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--border-color, #d9d9d9);
  color: var(--text-primary, #262626);
}

.btn-outline:hover {
  border-color: var(--primary-color, #1890ff);
  color: var(--primary-color, #1890ff);
}

.btn-success {
  background: var(--success-color, #52c41a);
  color: white;
}

.btn-success:hover {
  background: #73d13d;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 13px;
}

/* 镜头分解卡片 */
.shot-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-sm, 12px);
  margin-top: var(--spacing-md, 16px);
}

.shot-card {
  background: white;
  border: 1px solid var(--border-color, #e8e8e8);
  border-radius: var(--radius-sm, 8px);
  padding: var(--spacing-md, 16px);
  text-align: center;
}

.shot-number {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: var(--primary-color, #1890ff);
  color: white;
  border-radius: 50%;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: var(--spacing-xs, 8px);
}

.shot-info strong {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
}

.shot-info p {
  font-size: 12px;
  color: var(--text-secondary, #8c8c8c);
  margin: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .lesson-page.redesigned {
    padding: var(--spacing-md, 16px);
  }

  .container {
    max-width: 100%;
  }

  .task-section,
  .resources-section,
  .assignment-section,
  .tips-section {
    padding: var(--spacing-lg, 24px);
  }

  .section-title {
    font-size: 24px;
  }

  .resource-cards,
  .assignment-cards,
  .tips-grid {
    grid-template-columns: 1fr;
  }

  .resource-cards {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: var(--spacing-md, 16px);
  }

  .resource-card {
    min-width: 280px;
  }
}
</style>
