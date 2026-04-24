<template>
  <div class="chapter-content" :class="{ 'has-custom-html': hasCustomHtml }">
    <!-- 章节头部 -->
    <header class="chapter-header">
      <div class="chapter-title-row">
        <div class="chapter-number-badge">
          <span class="number">第{{ chapter.number }}章</span>
          <span v-if="chapter.elective" class="elective-badge">选修</span>
        </div>
        <h1 class="chapter-title">{{ chapter.title }}</h1>
      </div>

      <section v-if="showEditingGuide" class="editing-guide">
        <div class="editorial-meta">🕒 阅读时间: 3 分钟 | 💡 AI 创作者必读</div>

        <div class="editorial-intro">
          <p>
            很多人可能会有一个误区：既然是“AI生成视频”，那我只要输入
            <span class="mark-blue">提示词（Prompt）</span>
            ，AI就应该直接把一段完整的作品交给我，为什么我还要去学传统的“剪辑”呢？
          </p>
        </div>

        <blockquote class="editorial-quote">
          实际上，目前的AI更像是一个<span class="text-emphasis">“不知疲倦的摄影师和特效师”</span>，而你才是<span class="text-emphasis">“导演和剪辑师”</span>。AI只能为你提供素材（Raw Footage），真正让这些素材变成一部好看、有逻辑、能打动人的作品的，是剪辑。
        </blockquote>

        <div class="editorial-reasons">
          <h2>做AI视频必须要学剪辑的5个核心原因</h2>

          <article class="reason-item">
            <div class="reason-index">1</div>
            <div class="reason-body">
              <h3>AI只能生成“碎片”，剪辑才能构建“故事”</h3>
              <p>
                目前的AI工具通常只能生成几秒短片段，一部短片往往由几十段素材拼接而成。<span class="mark-yellow">蒙太奇效应</span>：A镜头+B镜头=故事（如跑+老虎=逃生）。<span class="mark-yellow">逻辑连贯</span>：远景-全景-中景-特写，符合人类叙事逻辑。
              </p>
            </div>
          </article>

          <article class="reason-item">
            <div class="reason-index">2</div>
            <div class="reason-body">
              <h3>规避和掩盖AI的“幻觉”与瑕疵（藏拙）</h3>
              <p>
                AI仍有不可控缺陷：手部变形、物体穿模、脸部崩坏。你需要在AI画面“崩坏”的前一帧<span class="text-danger">果断切掉</span>，或通过放大画面、画中画、加速掩盖瑕疵。
              </p>
              <p class="reason-strong">优秀的AI创作者，往往也是最懂“藏拙”的剪辑师。</p>
            </div>
          </article>

          <article class="reason-item">
            <div class="reason-index">3</div>
            <div class="reason-body">
              <h3>赋予视频“节奏感”与“情绪”</h3>
              <p>
                AI生成动作常常匀速。<span class="mark-yellow">视觉节奏</span>：变速和卡点。<span class="mark-yellow">情绪引导</span>：缓慢转场更抒情，快速硬切更紧张。
              </p>
              <p class="reason-strong">AI不懂观众的注意力曲线，剪辑才能控制观众的心跳。</p>
            </div>
          </article>

          <article class="reason-item">
            <div class="reason-index">4</div>
            <div class="reason-body">
              <h3>视听结合：声音是视频的灵魂</h3>
              <ul>
                <li>AI配音</li>
                <li>AI音乐</li>
                <li>音效（SFX）</li>
              </ul>
              <p>
                没有声音的AI视频，<span class="mark-yellow">表现力连一半都达不到</span>。必须在剪辑软件中对齐和融合。
              </p>
            </div>
          </article>

          <article class="reason-item">
            <div class="reason-index">5</div>
            <div class="reason-body">
              <h3>统一画风与后期包装</h3>
              <p>
                不同片段色彩、光影常有差异，需要通过<span class="reason-keyword">调色</span>做基础匹配，统一世界观；通过<span class="reason-keyword">包装</span>添加字幕、边框、水印，完成发布前的必备步骤。
              </p>
            </div>
          </article>
        </div>

        <hr class="editorial-divider" />

        <div class="editorial-summary">
          <h3>总结</h3>
          <p class="summary-core">AI取代的是“剧组（摄像、灯光、演员、服化道）”，但它目前还无法取代“导演的大脑”。</p>
          <p>
            如果你不懂剪辑，你做出来的只是一堆 <span class="summary-strike">令人惊叹的动图（GIF）</span> ；当你掌握了剪辑，你才能用这些AI素材去 <span class="summary-win">讲故事、做自媒体、接商单、甚至做电影</span>。
          </p>
        </div>

        <div class="editorial-beginner-box">
          <h4>💡 新手建议</h4>
          <p>
            不需要一上来就学极度复杂的电影级剪辑，掌握 <span class="reason-keyword">剪映（CapCut）</span> 这样的基础软件，学会基本的拼接、卡点音乐、加字幕和音效，就已经能让你的AI视频击败80%的同行了。
          </p>
          <button type="button" class="guide-cta-btn">开始学习剪映</button>
        </div>
      </section>

      <div v-if="chapter.learningIntro" class="learning-intro">
        <h3>💡 为什么先学这个</h3>
        <p class="learning-intro-text" v-html="formattedLearningIntro"></p>
      </div>

    </header>

    <section
      v-if="hasCustomHtml"
      class="custom-html-section"
      v-html="chapter.customHtml"
      @click="onCustomHtmlClick"
    ></section>

    <!-- 学习资源 -->
    <section v-if="!hasCustomHtml && !chapter.isAssignment" class="resources-section">
      <h2>📚 学习资源</h2>
      <div class="resource-list">
        <div
          v-for="(resource, index) in topResources"
          :key="index"
          class="resource-item"
          :class="[resource.type, { 'half-width': resource.half, 'has-video': resource.videoUrl }]"
        >
          <div class="resource-badge">{{ resource.badge }}</div>
          <div class="resource-content">
            <h4>{{ resource.title }}</h4>
            <p v-if="resource.descriptionHighlight" class="resource-description">
              <span>{{ resource.description }}</span>
              <span class="resource-desc-highlight">{{ resource.descriptionHighlight }}</span>
            </p>
            <p v-else>{{ resource.description }}</p>

            <!-- 课程内容列表 -->
            <div v-if="resource.items" class="resource-items">
              <ul>
                <li v-for="(item, idx) in resource.items" :key="idx" v-html="formatResourceItem(item)"></li>
              </ul>
            </div>

            <div v-if="resource.videoUrl" class="resource-video">
              <details open>
                <summary>🎬 必看视频教学（点击收起 / 展开）</summary>
                <div class="video-with-guide">
                  <video
                    :src="resource.videoUrl"
                    controls
                    preload="none"
                    @play="setVideoPlaying(`resource-main-${index}`, true)"
                    @pause="setVideoPlaying(`resource-main-${index}`, false)"
                    @ended="setVideoPlaying(`resource-main-${index}`, false)"
                  ></video>
                  <div v-if="!isVideoPlaying(`resource-main-${index}`)" class="video-play-guide">▶ 点击播放</div>
                </div>
              </details>
            </div>

            <!-- 资源链接 -->
            <div v-if="resource.link" class="resource-link">
              <a :href="resource.link" target="_blank" :class="['btn-link', { 'btn-link-video-focus': isVideoLink({ url: resource.link, label: resource.linkText }) }]">
                {{ resource.linkText || '▶️ 查看资源' }}
              </a>
              <span v-if="resource.duration" class="duration">{{ resource.duration }}</span>
            </div>

            <!-- 多个链接 -->
            <div v-if="resource.links" class="resource-links">
              <a
                v-for="(link, idx) in resource.links"
                :key="idx"
                :href="link.url"
                target="_blank"
                :class="getResourceLinkClass(link)"
              >
                {{ link.label }}
              </a>
            </div>

            <div v-if="resource.pdfUrl" class="resource-pdf">
              <div class="resource-pdf-actions">
                <a :href="resource.pdfUrl" target="_blank" class="btn-link">📄 新窗口打开PDF</a>
                <span>支持网页内滚动翻页</span>
              </div>
              <details class="resource-pdf-details">
                <summary>📖 点击展开在线预览</summary>
                <iframe
                  :src="getPdfPreviewUrl(resource.pdfUrl)"
                  class="resource-pdf-frame"
                  title="课程PDF讲义"
                  loading="lazy"
                ></iframe>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showToolComparisonInResources" class="tool-comparison">
        <h3>{{ chapter.toolComparison.title }}</h3>
        <div v-if="chapter.toolComparison.compareRows && chapter.toolComparison.compareRows.length" class="comparison-table">
          <div class="comparison-head">
            <span class="head-label">对比维度</span>
            <span class="head-mj">MJ</span>
            <span class="head-jimeng">即梦</span>
          </div>
          <div
            v-for="(row, rowIndex) in chapter.toolComparison.compareRows"
            :key="rowIndex"
            class="comparison-row"
          >
            <div class="comparison-dimension">{{ row.dimension }}</div>
            <div class="comparison-value mj">{{ row.mj }}</div>
            <div class="comparison-value jimeng">{{ row.jimeng }}</div>
          </div>
        </div>
        <ul v-else>
          <li v-for="(item, itemIndex) in chapter.toolComparison.items" :key="itemIndex">{{ item }}</li>
        </ul>
        <div
          v-if="chapter.toolComparison.recommendations && chapter.toolComparison.recommendations.length"
          class="comparison-recommendations"
        >
          <p v-for="(recommendation, recIndex) in chapter.toolComparison.recommendations" :key="recIndex" v-html="formatComparisonRecommendation(recommendation)">
          </p>
        </div>
      </div>
    </section>

    <!-- 实践任务 -->
    <section v-if="!hasCustomHtml && chapter.practiceTasks && chapter.practiceTasks.length" class="practice-section">
      <h2>✏️ 实践任务</h2>
      <div v-if="showPracticeFlow" class="practice-flow">
        <div class="practice-flow-title">🔄 关键步骤流程（从左到右）</div>
        <div class="practice-flow-track">
          <div
            v-for="(task, index) in flowPracticeTasks"
            :key="`flow-${task.step}-${index}`"
            :class="['flow-step', { 'is-current': index === 0, 'not-last': index < flowPracticeTasks.length - 1 }]"
          >
            <div class="flow-step-number">{{ task.step }}</div>
            <h4>{{ task.title }}</h4>
            <p>{{ task.description }}</p>
          </div>
        </div>
      </div>
      <div class="practice-tasks">
        <div
          v-for="(task, index) in regularPracticeTasks"
          :key="`${task.step}-${index}`"
          class="practice-task"
        >
          <div class="task-number">{{ task.step }}</div>
          <div class="task-content">
            <h4>{{ task.title }}</h4>
            <p>{{ task.description }}</p>
            <div v-if="task.exampleVideos && task.exampleVideos.length" class="example-videos-label">🎬 示例</div>
            <div v-if="task.exampleVideos && task.exampleVideos.length" class="example-videos-grid">
              <div
                v-for="(video, videoIndex) in task.exampleVideos"
                :key="`example-video-${task.step}-${videoIndex}`"
                class="video-with-guide"
              >
                <video
                  :src="video"
                  controls
                  preload="none"
                  @play="setVideoPlaying(`example-${task.step}-${videoIndex}`, true)"
                  @pause="setVideoPlaying(`example-${task.step}-${videoIndex}`, false)"
                  @ended="setVideoPlaying(`example-${task.step}-${videoIndex}`, false)"
                ></video>
                <div v-if="!isVideoPlaying(`example-${task.step}-${videoIndex}`)" class="video-play-guide">▶ 点击播放</div>
              </div>
            </div>

            <div v-if="getTaskResources(task.step).length || shouldShowToolComparisonInTask(task.step)" class="task-moved-resources">
              <h2 class="task-moved-resources-title">📚 学习资源</h2>
              <div v-if="getTaskResources(task.step).length" class="resource-list task-resource-list">
                <div
                  v-for="(resource, rIndex) in getTaskResources(task.step)"
                  :key="`task-resource-${task.step}-${rIndex}`"
                  class="resource-item"
                  :class="[resource.type, { 'half-width': resource.half, 'has-video': resource.videoUrl }]"
                >
                  <div class="resource-badge">{{ resource.badge }}</div>
                  <div class="resource-content">
                    <h4>{{ resource.title }}</h4>
                    <p v-if="resource.descriptionHighlight" class="resource-description">
                      <span>{{ resource.description }}</span>
                      <span class="resource-desc-highlight">{{ resource.descriptionHighlight }}</span>
                    </p>
                    <p v-else>{{ resource.description }}</p>

                    <div v-if="resource.items" class="resource-items">
                      <ul>
                        <li v-for="(item, idx) in resource.items" :key="idx" v-html="formatResourceItem(item)"></li>
                      </ul>
                    </div>

                    <div v-if="resource.videoUrl" class="resource-video">
                      <details open>
                        <summary>🎬 必看视频教学（点击收起 / 展开）</summary>
                        <div class="video-with-guide">
                          <video
                            :src="resource.videoUrl"
                            controls
                            preload="none"
                            @play="setVideoPlaying(`resource-task-${task.step}-${rIndex}`, true)"
                            @pause="setVideoPlaying(`resource-task-${task.step}-${rIndex}`, false)"
                            @ended="setVideoPlaying(`resource-task-${task.step}-${rIndex}`, false)"
                          ></video>
                          <div v-if="!isVideoPlaying(`resource-task-${task.step}-${rIndex}`)" class="video-play-guide">▶ 点击播放</div>
                        </div>
                      </details>
                    </div>

                    <div v-if="resource.link" class="resource-link">
                      <a :href="resource.link" target="_blank" :class="['btn-link', { 'btn-link-video-focus': isVideoLink({ url: resource.link, label: resource.linkText }) }]">
                        {{ resource.linkText || '▶️ 查看资源' }}
                      </a>
                      <span v-if="resource.duration" class="duration">{{ resource.duration }}</span>
                    </div>

                    <div v-if="resource.links" class="resource-links">
                      <a
                        v-for="(link, idx) in resource.links"
                        :key="idx"
                        :href="link.url"
                        target="_blank"
                        :class="getResourceLinkClass(link)"
                      >
                        {{ link.label }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="shouldShowToolComparisonInTask(task.step)" class="tool-comparison">
                <h3>{{ chapter.toolComparison.title }}</h3>
                <div v-if="chapter.toolComparison.compareRows && chapter.toolComparison.compareRows.length" class="comparison-table">
                  <div class="comparison-head">
                    <span class="head-label">对比维度</span>
                    <span class="head-mj">MJ</span>
                    <span class="head-jimeng">即梦</span>
                  </div>
                  <div
                    v-for="(row, rowIndex) in chapter.toolComparison.compareRows"
                    :key="`task-compare-${rowIndex}`"
                    class="comparison-row"
                  >
                    <div class="comparison-dimension">{{ row.dimension }}</div>
                    <div class="comparison-value mj">{{ row.mj }}</div>
                    <div class="comparison-value jimeng">{{ row.jimeng }}</div>
                  </div>
                </div>
                <ul v-else>
                  <li v-for="(item, itemIndex) in chapter.toolComparison.items" :key="`task-item-${itemIndex}`">{{ item }}</li>
                </ul>
                <div
                  v-if="chapter.toolComparison.recommendations && chapter.toolComparison.recommendations.length"
                  class="comparison-recommendations"
                >
                  <p v-for="(recommendation, recIndex) in chapter.toolComparison.recommendations" :key="`task-rec-${recIndex}`" v-html="formatComparisonRecommendation(recommendation)">
                  </p>
                </div>
              </div>
            </div>

            <!-- 小贴士 -->
            <div v-if="task.tips" class="task-tips-list">
              <strong>💡 小技巧：</strong>
              <ul>
                <li v-for="(tip, idx) in task.tips" :key="idx" v-html="tip"></li>
              </ul>
            </div>

            <!-- 示例 -->
            <div v-if="task.example || task.scriptExample" class="task-example">
              <div v-if="task.example && !task.scriptExample && getNarrativeSteps(task.example).length" class="narrative-flow">
                <template
                  v-for="(stepText, stepIndex) in getNarrativeSteps(task.example)"
                  :key="`narrative-${task.step}-${stepIndex}`"
                >
                  <div class="narrative-card">
                    <div class="narrative-card-index">图{{ stepIndex + 1 }}</div>
                    <div class="narrative-card-text">{{ stepText }}</div>
                  </div>
                  <div
                    v-if="stepIndex < getNarrativeSteps(task.example).length - 1"
                    class="narrative-arrow"
                    aria-hidden="true"
                  >
                    ➜
                  </div>
                </template>
              </div>
              <p v-else-if="task.example && !task.scriptExample">{{ task.example }}</p>
              <p v-if="task.exampleGuideIntro && !task.scriptExample" class="task-example-guide">{{ task.exampleGuideIntro }}</p>
              <ul v-if="task.exampleGuideList && task.exampleGuideList.length && !task.scriptExample" class="task-example-guide-list">
                <li v-for="(guideItem, guideIndex) in task.exampleGuideList" :key="`guide-${task.step}-${guideIndex}`">
                  <span v-html="formatGuideItem(guideItem)"></span>
                </li>
              </ul>
              <p v-else-if="task.exampleGuide && !task.scriptExample" class="task-example-guide">{{ task.exampleGuide }}</p>
              <div v-if="task.exampleImages && task.exampleImages.length" class="example-images-grid">
                <img
                  v-for="(image, imgIndex) in task.exampleImages"
                  :key="`example-image-${task.step}-${imgIndex}`"
                  :src="image"
                  :alt="`示例图${imgIndex + 1}`"
                  loading="lazy"
                />
              </div>
              
              <!-- 结构化脚本示例 -->
              <div v-if="task.scriptExample" class="script-example-box">
                <div class="script-core">
                  <span class="label">一句话故事内核：</span>
                  <p>{{ task.scriptExample.core }}</p>
                </div>
                <div class="script-breakdown">
                  <span class="label">四图脚本拆解：</span>
                  <div class="script-grid">
                    <div v-for="(scene, idx) in task.scriptExample.scenes" :key="idx" class="script-card">
                      <div class="script-card-header">{{ scene.title }}</div>
                      <div class="script-card-body">{{ scene.content }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- 镜头分解 -->
            <div v-if="task.shots" class="shots-grid">
              <div v-for="shot in task.shots" :key="shot.number" class="shot-card">
                <span class="shot-number">{{ shot.number }}</span>
                <div class="shot-info">
                  <strong>{{ shot.type }}</strong>
                  <p>{{ shot.desc }}</p>
                  <div v-if="shot.prompt" class="shot-prompt-wrap">
                    <p class="shot-prompt">{{ shot.prompt }}</p>
                    <button
                      type="button"
                      class="copy-prompt-btn"
                      :class="{ copied: copiedPromptKey === `${task.step}-${shot.number}` }"
                      @click="copyPrompt(shot.prompt, `${task.step}-${shot.number}`)"
                    >
                      复制
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 互动问答 -->
            <div v-if="task.quiz" class="interactive-quiz">
              <div class="quiz-question">
                <strong>🤔 思考题：</strong>
                <p>{{ task.quiz.question }}</p>
                <ul v-if="task.scriptExample && task.scriptExample.scenes && task.scriptExample.scenes.length" class="quiz-scene-list">
                  <li v-for="(scene, idx) in task.scriptExample.scenes" :key="`quiz-scene-${task.step}-${idx}`">
                    {{ scene.content }}
                  </li>
                </ul>
              </div>
              <div class="quiz-options" v-if="!quizRevealed[task.step]">
                <button 
                  v-for="(option, idx) in task.quiz.options" 
                  :key="idx"
                  class="btn-quiz-option"
                  @click="revealQuiz(task.step, option)"
                >
                  {{ option }}
                </button>
              </div>
            </div>
            <div v-if="task.quiz && quizRevealed[task.step]" class="quiz-answer-box" :class="{ 'is-correct': selectedAnswer[task.step] === task.quiz.correctAnswer }">
              <div class="answer-header">
                <span class="result-icon">{{ selectedAnswer[task.step] === task.quiz.correctAnswer ? '✅' : '❌' }}</span>
                <strong>正确答案：{{ task.quiz.correctAnswer }}</strong>
              </div>
              <div class="answer-content" v-html="task.quiz.explanation"></div>
            </div>

            <!-- AI 辅助设计 -->
            <div v-if="task.aiAssist" class="ai-assist-card">
              <details class="ai-assist-details">
                <summary class="ai-assist-summary">
                  <span class="summary-title">🤖 比较懒？让 AI 帮你写</span>
                  <span class="summary-hint">🧭 点击展开</span>
                </summary>
                <div class="ai-assist-content">
                  <div class="ai-assist-header">
                    <a :href="task.aiAssist.url" target="_blank" class="btn btn-primary btn-sm">{{ task.aiAssist.btnText || '打开 AI 对话工具' }}</a>
                  </div>
                  <p>直接把这段提示词扔给它：</p>
                  <div class="prompt-box">
                    <code v-html="formatAiAssistPrompt(task.aiAssist.prompt)"></code>
                    <button
                      type="button"
                      class="copy-prompt-btn"
                      :class="{ copied: copiedPromptKey === `ai-assist-${task.step}` }"
                      @click="copyPrompt(task.aiAssist.prompt, `ai-assist-${task.step}`)"
                    >
                      {{ copiedPromptKey === `ai-assist-${task.step}` ? '已复制' : '复制' }}
                    </button>
                  </div>
                  <p class="prompt-note">注：绿色部分，可以换成你自己的四图故事设计。</p>
                  
                  <div v-if="task.aiAssist.result" class="ai-result-showcase">
                    <div class="ai-result-header">
                      <span class="ai-result-title">✨ AI 返回的内容示例：</span>
                      <span class="ai-result-note">注意，AI 出的提示词并非完美，有些地方不足的，需要再手工删改</span>
                    </div>
                    <div v-for="(item, idx) in task.aiAssist.result" :key="idx" class="ai-result-item">
                      <h5>{{ item.title }}</h5>
                      <p class="desc">{{ item.desc }}</p>
                      <div class="prompt-box result-prompt">
                        <code>{{ item.prompt }}</code>
                        <button
                          type="button"
                          class="copy-prompt-btn"
                          :class="{ copied: copiedPromptKey === `ai-result-${task.step}-${idx}` }"
                          @click="copyPrompt(item.prompt, `ai-result-${task.step}-${idx}`)"
                        >
                          {{ copiedPromptKey === `ai-result-${task.step}-${idx}` ? '已复制' : '复制英文提示词' }}
                        </button>
                      </div>
                      <p class="translation">{{ item.translation }}</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            <!-- 工具列表 -->
            <div v-if="task.tools" class="tools-list">
              <div v-for="tool in task.tools" :key="tool.name" class="tool-item">
                <strong>🎬 {{ tool.name }}：</strong>
                <a :href="tool.url" target="_blank">{{ tool.url }}</a>
                <span v-if="tool.desc"> - {{ tool.desc }}</span>
              </div>
            </div>

            <!-- 课程列表 -->
            <div v-if="task.lessons" class="lessons-list">
              <ul>
                <li v-for="(lesson, idx) in task.lessons" :key="idx">{{ lesson }}</li>
              </ul>
            </div>

            <!-- 技能列表 -->
            <div v-if="task.skills" class="skills-list">
              <span v-for="(skill, idx) in task.skills" :key="idx" class="skill-tag">
                {{ skill }}
              </span>
            </div>

            <!-- 任务列表 -->
            <div v-if="task.tasks" class="tasks-list">
              <ul>
                <li v-for="(taskItem, idx) in task.tasks" :key="idx">{{ taskItem }}</li>
              </ul>
            </div>

            <!-- 行动按钮 -->
            <div v-if="task.actionLinks && task.actionLinks.length" class="task-action-links">
              <a
                v-for="(link, linkIndex) in task.actionLinks"
                :key="linkIndex"
                :href="link.url"
                target="_blank"
                class="btn btn-primary"
              >
                {{ link.text || '开始' }}
              </a>
            </div>
            <a
              v-else-if="task.actionLink"
              :href="task.actionLink"
              target="_blank"
              class="btn btn-primary"
            >
              {{ task.actionText || '开始' }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 作业章节 -->
    <section v-if="!hasCustomHtml && chapter.assignments && chapter.assignments.length" class="assignment-section">
      <h2>📝 作业提交</h2>
      <div class="assignment-list">
        <div
          v-for="assignment in chapter.assignments"
          :key="assignment.id"
          class="assignment-card"
          :class="{ required: assignment.required }"
        >
          <div class="assignment-header">
            <h3>{{ assignment.title }}</h3>
            <span class="assignment-badge">{{ assignment.required ? '必修' : '选修' }}</span>
          </div>
          <p class="assignment-status">{{ assignment.status }}</p>

          <div class="assignment-requirements">
            <h4>✅ 作业要求：</h4>
            <ul>
              <li v-for="(req, idx) in assignment.requirements" :key="idx">{{ req }}</li>
            </ul>
          </div>

          <div v-if="assignment.submitSteps" class="submit-steps">
            <h4>📤 提交方式：</h4>
            <div v-for="(step, idx) in assignment.submitSteps" :key="idx" class="submit-step">
              <span class="step-num">{{ step.step }}</span>
              <p>{{ step.instruction }} <code v-if="step.hashtag">{{ step.hashtag }}</code></p>
              <a v-if="step.url" :href="step.url" target="_blank" class="btn btn-primary">
                {{ step.btnText || '提交' }}
              </a>
            </div>
          </div>

          <div v-if="assignment.tools" class="assignment-tools">
            <h4>🎨 工具：</h4>
            <a
              v-for="tool in assignment.tools"
              :key="tool.name"
              :href="tool.url"
              target="_blank"
              class="btn btn-outline"
            >
              {{ tool.btnText || tool.name }}
            </a>
          </div>

          <div v-if="assignment.tips" class="assignment-tips">
            <h4>💡 提示：</h4>
            <p>{{ assignment.tips }}</p>
          </div>

          <div v-if="assignment.submitUrl" class="assignment-submit">
            <a :href="assignment.submitUrl" target="_blank" class="btn btn-primary">
              {{ assignment.btnText || '📝 提交作业' }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 任务前置模块 -->
    <div v-if="chapter.preTaskModule && isQuizUnlocked" class="pre-task-module">
      <h3>📝 作业任务</h3>
      <p>{{ chapter.preTaskModule.description }}</p>
      <p class="pre-task-submit">
        &gt;&gt; 提交到《补基础：景别镜头图》：
        <a :href="chapter.preTaskModule.submitUrl" target="_blank" rel="noopener">{{ chapter.preTaskModule.submitUrl }}</a>
      </p>
      <p class="pre-task-note">{{ chapter.preTaskModule.note }}</p>
    </div>

    <!-- 本章任务 -->
    <div v-if="chapter.chapterTask && isQuizUnlocked" class="chapter-task-card">
      <div class="chapter-task-main">
        <h3>🎯 本章任务</h3>
        <div class="task-checkbox">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="taskChecked"
              @change="onTaskCheck"
            />
            <span>{{ chapter.chapterTask.description }}</span>
          </label>
        </div>
        <p v-if="chapter.chapterTask.tips" class="task-tips">
          💡 {{ chapter.chapterTask.tips }}
        </p>
      </div>

      <!-- 完成后显示 -->
      <Transition name="task-complete">
        <div v-if="isCompleted && taskChecked" class="completed-message">
          <div class="success-icon">🎉</div>
          <h4>恭喜完成本章！</h4>
          <button
            v-if="nextChapterId"
            @click="goToNextChapter"
            class="btn btn-next"
          >
            → 进入第{{ getNextChapterNumber() }}章
          </button>
          <button
            v-else
            @click="goToNextTask"
            class="btn btn-next"
          >
            → 下一个任务
          </button>
        </div>
      </Transition>
    </div>

    <!-- 任务完成弹出彩蛋 -->
    <Transition name="cta-modal-pop">
      <div v-if="showCtaModal && chapter.ctaModalHtml" class="cta-modal-overlay" @click.self="showCtaModal = false">
        <div class="cta-modal-content">
          <button class="cta-modal-close" @click="showCtaModal = false">×</button>
          <div v-html="chapter.ctaModalHtml" class="cta-modal-html-container" @click="onCustomHtmlClick"></div>
        </div>
      </div>
    </Transition>

    <Transition name="copy-hint-fade">
      <div v-if="showCopyHint" class="magic-copy-hint" :style="copyHintStyle">已经复制</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useChapterProgressStore } from '../stores/chapterProgress'

const props = defineProps({
  weekId: {
    type: String,
    required: true
  },
  chapter: {
    type: Object,
    required: true
  },
  allChapters: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['chapter-complete', 'next-chapter', 'next-task'])

const progressStore = useChapterProgressStore()

const taskChecked = ref(false)
const isCompleted = ref(false)
const copiedPromptKey = ref('')
const quizRevealed = ref({})
const selectedAnswer = ref({})
const videoPlayingMap = ref({})

const showEditingGuide = computed(() => {
  return String(props.chapter?.title || '').includes('视频剪辑')
})

const hasCustomHtml = computed(() => {
  // chapter1 恢复为结构化课程内容，不走 customHtml 注入
  if (props.chapter?.id === 'chapter1') return false
  return Boolean(props.chapter?.customHtml)
})

const topResources = computed(() => {
  return (props.chapter.resources || []).filter(resource => !resource.moveToTaskStep)
})

const showToolComparisonInResources = computed(() => {
  return Boolean(props.chapter.toolComparison && !props.chapter.toolComparison.moveToTaskStep)
})

const firstQuizTaskIndex = computed(() => {
  return (props.chapter.practiceTasks || []).findIndex(task => task.quiz)
})

const isQuizUnlocked = computed(() => {
  // week2 第一课需要始终显示本章任务勾选区
  if (props.chapter?.id === 'week2-chapter1') return true
  if (firstQuizTaskIndex.value === -1) return true
  return Object.values(quizRevealed.value).some(Boolean)
})

const visiblePracticeTasks = computed(() => {
  const tasks = props.chapter.practiceTasks || []
  if (firstQuizTaskIndex.value === -1) return tasks
  if (isQuizUnlocked.value) return tasks
  return tasks.filter((_, index) => index <= firstQuizTaskIndex.value)
})

const showPracticeFlow = computed(() => {
  return String(props.chapter?.title || '').includes('视频剪辑') && visiblePracticeTasks.value.length >= 4
})

const flowPracticeTasks = computed(() => {
  return showPracticeFlow.value ? visiblePracticeTasks.value : []
})

const regularPracticeTasks = computed(() => {
  return showPracticeFlow.value ? [] : visiblePracticeTasks.value
})

const getTaskResources = (step) => {
  return (props.chapter.resources || []).filter(resource => resource.moveToTaskStep === step)
}

const shouldShowToolComparisonInTask = (step) => {
  return props.chapter.toolComparison?.moveToTaskStep === step
}

const isJimengLink = (link) => {
  const url = link?.url || ''
  const label = link?.label || ''
  return url.includes('jimeng.jianying.com') || label.includes('即梦')
}

const isCapcutLink = (link) => {
  const url = link?.url || ''
  const label = link?.label || ''
  return url.includes('capcut.cn') || label.includes('剪映')
}

const isCreationLink = (link) => {
  const url = link?.url || ''
  const label = link?.label || ''
  return (
    label.includes('开始创作') ||
    url.includes('art.forchange.cn/mj') ||
    url.includes('jimeng.jianying.com')
  )
}

const isPromptToolLink = (link) => {
  const url = link?.url || ''
  const label = link?.label || ''
  return (
    url.includes('xueshanlinghu.github.io/MJPromptGenerator') ||
    label.includes('提示词生成器') ||
    label.includes('MJ提示词')
  )
}

const isVideoLink = (link) => {
  const url = link?.url || ''
  const label = link?.label || ''
  return url.includes('fclive.pandacollege.cn') || label.includes('直播') || label.includes('视频') || label.includes('回放')
}

const getResourceLinkClass = (link) => {
  if (isCapcutLink(link) || isCreationLink(link)) {
    return ['btn', 'btn-primary']
  }
  if (isPromptToolLink(link)) {
    return ['btn-link', 'btn-link-jimeng']
  }
  return ['btn-link', { 'btn-link-jimeng': isJimengLink(link), 'btn-link-video-focus': isVideoLink(link) }]
}

const getResourceGuide = (resource) => {
  if (resource.videoUrl) {
    return '🔥 必看：先点上方视频教学，再进行实操'
  }
  if (resource.links?.some(isJimengLink)) {
    return '👈 推荐：先点这个进入即梦官网'
  }
  if (isVideoLink({ url: resource.link, label: resource.linkText })) {
    return '👈 推荐：先看直播回放，再继续学习'
  }
  return ''
}

const getPdfPreviewUrl = (pdfUrl) => {
  const url = String(pdfUrl || '')
  if (!url) return url
  if (url.includes('view=') || url.includes('zoom=')) return url
  return `${url}${url.includes('#') ? '&' : '#'}view=FitH&zoom=page-fit&pagemode=none`
}

const getNarrativeSteps = (exampleText) => {
  const raw = String(exampleText || '').trim()
  if (!raw.includes('→')) return []
  const normalized = raw.replace(/^四图叙事[:：]\s*/, '')
  return normalized
    .split('→')
    .map(item => item.trim())
    .filter(Boolean)
}

const formatAiAssistPrompt = (promptText) => {
  const escapeHtml = (text) => String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const raw = String(promptText || '')
  if (!raw) return ''

  const highlights = [
    '一个小女孩找回走失小猫',
    '开场发现小猫不见 → 线索追寻 → 在雨夜巷口找到 → 抱着小猫回家。'
  ]

  let formatted = escapeHtml(raw)
  highlights.forEach((segment) => {
    const escapedSegment = escapeHtml(segment)
    formatted = formatted.replace(
      escapedSegment,
      `<span class="prompt-highlight">${escapedSegment}</span>`
    )
  })
  return formatted.replace(/\n/g, '<br>')
}

const formatComparisonRecommendation = (text) => {
  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const raw = String(text || '')
  const escaped = escapeHtml(raw)
  return escaped
    .replace(/^新手建议：/, '<span class="advice-marker">新手建议</span>：')
    .replace(/^高手建议：/, '<span class="advice-marker">高手建议</span>：')
}

const formatGuideItem = (text) => {
  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const raw = String(text || '').trim()
  if (!raw) return ''

  if (raw.startsWith('画面风格：')) {
    return raw.replace('画面风格', '<span class="guide-marker">画面风格</span>')
  }
  if (raw.startsWith('画面景别/视角/镜头：')) {
    return raw.replace('画面景别/视角/镜头', '<span class="guide-marker">画面景别/视角/镜头</span>')
  }
  if (raw.startsWith('画面具体内容')) {
    return raw.replace('画面具体内容', '<span class="guide-marker">画面具体内容</span>')
  }
  return escapeHtml(raw)
}

const formatResourceItem = (item) => {
  const escapeHtml = (text) => String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const escapeRegExp = (text) => String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const normalized = String(item || '').trim()
  if (!normalized) return ''

  const dividerIndex = normalized.indexOf('：')
  if (dividerIndex <= 0) return escapeHtml(normalized)

  const label = normalized.slice(0, dividerIndex)
  const content = normalized.slice(dividerIndex + 1).trim()
  const motionKeywords = [
    '缓慢向前推进',
    '轻微右移',
    '抬头',
    '眨眼',
    '向前迈一步',
    '轻轻吹动',
    '缓慢飘落',
    '轻微闪烁',
    '缓慢推近',
    '转身',
    '看向镜头',
    '随风摆动',
    '缓慢流动'
  ]

  const highlightedContent = motionKeywords.reduce((text, keyword) => {
    const pattern = new RegExp(escapeRegExp(keyword), 'g')
    return text.replace(pattern, `<span class="motion-keyword">${keyword}</span>`)
  }, escapeHtml(content))

  return `<span class="resource-item-label">${escapeHtml(label)}</span><span class="resource-item-text">${highlightedContent}</span>`
}

const revealQuiz = (step, option) => {
  selectedAnswer.value[step] = option
  quizRevealed.value[step] = true
}

const setVideoPlaying = (videoId, isPlaying) => {
  videoPlayingMap.value[videoId] = isPlaying
}

const isVideoPlaying = (videoId) => {
  return Boolean(videoPlayingMap.value[videoId])
}

const chapterStatus = computed(() => {
  return progressStore.getChapterStatus(props.weekId, props.chapter.id)
})

const nextChapterId = computed(() => {
  const currentIndex = props.allChapters.findIndex(c => c.id === props.chapter.id)
  if (currentIndex < props.allChapters.length - 1) {
    return props.allChapters[currentIndex + 1].id
  }
  return null
})

const formattedLearningIntro = computed(() => {
  const rawText = props.chapter.learningIntro || ''
  const escapedText = rawText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const highlights = [
    { keyword: '“图”决定了视频的内容质量', className: 'intro-highlight intro-highlight-strong' },
    { keyword: '角色、场景、氛围和镜头节奏', className: 'intro-highlight intro-highlight-minor' },
    { keyword: '稳定、连贯', className: 'intro-highlight intro-highlight-minor' },
    { keyword: '人物变形或风格跳变', className: 'intro-highlight intro-highlight-minor' },
    { keyword: '分镜和美术设定', className: 'intro-highlight intro-highlight-minor' },
    { keyword: '先把故事讲明白，再让它动起来', className: 'intro-highlight intro-highlight-strong' }
  ]

  const highlightedText = highlights.reduce((text, item) => {
    return text.replace(item.keyword, `<span class="${item.className}">${item.keyword}</span>`)
  }, escapedText)

  return highlightedText
    .split('。')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<span class="intro-line">${line}。</span>`)
    .join('')
})

if (chapterStatus.value.completed) {
  isCompleted.value = true
}

const showCtaModal = ref(false)
const showCopyHint = ref(false)
const copyHintPosition = ref({ x: 0, y: 0 })
let copyHintTimer = null

const onTaskCheck = () => {
  if (taskChecked.value) {
    progressStore.completeChapterTask(props.weekId, props.chapter.id)
    progressStore.completeChapter(props.weekId, props.chapter.id)
    isCompleted.value = true
    emit('chapter-complete', props.chapter.id)
    if (props.chapter.ctaModalHtml) {
      showCtaModal.value = true
    }
  }
}

const closeModalAndScrollToTask = async () => {
  showCtaModal.value = false
  await nextTick()
  window.setTimeout(() => {
    const taskCard = document.querySelector('.chapter-task-card')
    if (taskCard instanceof HTMLElement) {
      taskCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 120)
}

const getNextChapterNumber = () => {
  const nextChapter = props.allChapters.find(c => c.id === nextChapterId.value)
  return nextChapter?.number || ''
}

const goToNextChapter = () => {
  if (nextChapterId.value) {
    emit('next-chapter', nextChapterId.value)
  }
}

const goToNextTask = () => {
  emit('next-task')
}

const copyPrompt = async (prompt, key) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(prompt)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = prompt
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copiedPromptKey.value = key
    setTimeout(() => {
      if (copiedPromptKey.value === key) {
        copiedPromptKey.value = ''
      }
    }, 1500)
  } catch (err) {
    console.error('Failed to copy text:', err)
    copiedPromptKey.value = ''
  }
}

const copyTextSilently = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

const onCustomHtmlClick = async (event) => {
  const target = event.target
  if (!(target instanceof HTMLElement)) return

  const ctaLink = target.closest('.super-pulse-btn')
  if (ctaLink instanceof HTMLAnchorElement && showCtaModal.value) {
    await closeModalAndScrollToTask()
    return
  }

  const magicWord = target.closest('.magic-word')
  if (!(magicWord instanceof HTMLElement)) return

  const text = magicWord.innerText?.trim()
  if (!text) return

  try {
    await copyTextSilently(text)
    magicWord.classList.add('copied')
    copyHintPosition.value = {
      x: event.clientX + 12,
      y: event.clientY - 24
    }
    showCopyHint.value = true
    if (copyHintTimer) clearTimeout(copyHintTimer)
    copyHintTimer = setTimeout(() => {
      showCopyHint.value = false
    }, 900)
    setTimeout(() => {
      magicWord.classList.remove('copied')
    }, 900)
  } catch (err) {
    console.error('Failed to copy magic word:', err)
  }
}

const copyHintStyle = computed(() => ({
  left: `${copyHintPosition.value.x}px`,
  top: `${copyHintPosition.value.y}px`
}))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap');

.chapter-content {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px 88px 40px 32px;
  box-sizing: border-box;
}

.chapter-content:not(.has-custom-html) {
  padding: 40px 20% 40px 10%;
}

/* 章节头部 */
.chapter-header {
  margin-bottom: 40px;
}

.chapter-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.custom-html-section {
  width: 100%;
  margin: 0 0 40px 0;
}

.custom-html-section :deep(*) {
  box-sizing: border-box;
}

.custom-html-section :deep(.container) {
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-main: #334155;
  --text-title: #0f172a;
  --text-muted: #64748b;
  --primary: #4f46e5;
  --danger-bg: #fef2f2;
  --danger-border: #ef4444;
  --danger-text: #b91c1c;
  --highlight-yellow: rgba(253, 224, 71, 0.6);
  width: 100%;
  max-width: none;
  margin: 0;
  background: var(--bg-color);
  color: var(--text-main);
  font-family: 'Noto Sans SC', -apple-system, sans-serif;
  line-height: 1.75;
  font-size: 16px;
  padding: 20px 20% 20px 10%;
}

.custom-html-section :deep(h1) {
  font-size: 2.2rem;
  line-height: 1.4;
  text-align: center;
  background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 40px 0;
  font-weight: 900;
}

.custom-html-section :deep(h2) {
  font-size: 1.6rem;
  color: var(--text-title);
  border-left: 6px solid var(--primary);
  padding-left: 15px;
  margin-top: 55px;
  font-weight: 800;
  background: linear-gradient(to right, rgba(79, 70, 229, 0.05), transparent);
  padding-top: 5px;
  padding-bottom: 5px;
}

.custom-html-section :deep(h3) {
  font-size: 1.25rem;
  color: var(--text-title);
  margin-top: 35px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-html-section :deep(.warning-box) {
  background-color: var(--danger-bg);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-left: 6px solid var(--danger-border);
  padding: 25px 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.custom-html-section :deep(.warning-box .title) {
  color: var(--danger-text);
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.custom-html-section :deep(.secret-box) {
  background-color: var(--card-bg);
  border: 1px solid #e2e8f0;
  padding: 25px 30px;
  border-radius: 12px;
  margin: 25px 0;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  position: relative;
}

.custom-html-section :deep(.hl-red) {
  background-color: rgba(254, 202, 202, 0.7);
  color: #991b1b;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 700;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.custom-html-section :deep(.hl-yellow) {
  background-image: linear-gradient(transparent 40%, var(--highlight-yellow) 40%);
  color: var(--text-title);
  padding: 0 4px;
  font-weight: 800;
}

.custom-html-section :deep(.gradient-text) {
  background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.custom-html-section :deep(.code-block) {
  background-color: #0f172a;
  color: #a7f3d0;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  margin: 18px 0;
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.2);
}

.custom-html-section :deep(.code-block)::before {
  content: '点击复制';
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 0.75rem;
  color: #94a3b8;
  font-family: sans-serif;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.custom-html-section :deep(.magic-word) {
  background-color: #f1f5f9;
  color: #0284c7;
  font-family: 'Courier New', Courier, monospace;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-html-section :deep(.magic-word:hover),
.cta-modal-html-container :deep(.magic-word:hover) {
  background-color: #e2e8f0;
}

.custom-html-section :deep(.magic-word.copied),
.cta-modal-html-container :deep(.magic-word.copied) {
  background-color: #dcfce7;
  border-color: #22c55e;
  color: #166534;
}

.custom-html-section :deep(.badge) {
  background: linear-gradient(45deg, #ef4444 0%, #f97316 100%);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 900;
  vertical-align: middle;
  margin-left: 8px;
  box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
}

.custom-html-section :deep(.cta-box) {
  background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  margin-top: 70px;
  box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.15);
}

.custom-html-section :deep(.cta-box)::before {
  content: '';
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(45deg, #3b82f6, #10b981, #3b82f6);
  border-radius: 18px;
  z-index: -1;
  animation: custom-breathe 3s ease-in-out infinite alternate;
}

.custom-html-section :deep(.cta-box h3) {
  margin-top: 0;
  color: #047857;
  font-size: 1.6rem;
  font-weight: 900;
}

.custom-html-section :deep(.cta-action) {
  background-color: #f8fafc;
  border: 2px dashed #10b981;
  padding: 20px;
  border-radius: 12px;
  margin: 25px 0 10px 0;
  display: inline-block;
  width: 85%;
}

.custom-html-section :deep(ul) {
  padding-left: 20px;
}

.custom-html-section :deep(li) {
  margin-bottom: 12px;
}

.custom-html-section :deep(hr) {
  border: 0;
  height: 1px;
  background: #e2e8f0;
  margin: 50px 0;
}

.custom-html-section :deep(.recap-box) {
  background-color: #f1f5f9;
  border-left: 6px solid #64748b;
  padding: 20px 25px;
  border-radius: 8px;
  margin: 20px 0;
}

.custom-html-section :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.95rem;
}

.custom-html-section :deep(th),
.custom-html-section :deep(td) {
  padding: 12px 15px;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.custom-html-section :deep(th) {
  background-color: #f1f5f9;
  color: var(--text-title);
  font-weight: 700;
}

.custom-html-section :deep(.story-grid) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 25px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px;
  border: 1px solid #e2e8f0;
}

.custom-html-section :deep(.story-item) {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.custom-html-section :deep(.story-item img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 16 / 9;
}

.custom-html-section :deep(.story-label) {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.8);
  color: #fff;
  font-size: 0.8rem;
  padding: 6px;
  text-align: center;
  backdrop-filter: blur(4px);
}

.custom-html-section :deep(.story-grid.text-only-grid .story-item) {
  min-height: 88px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  display: flex;
  align-items: center;
}

.custom-html-section :deep(.story-grid.text-only-grid .story-label) {
  position: static;
  width: 100%;
  background: transparent;
  color: #334155;
  font-size: 0.95rem;
  padding: 12px;
  text-align: left;
  backdrop-filter: none;
}

.custom-html-section :deep(.img-caption) {
  background: #f8fafc;
  padding: 12px 15px;
  font-size: 0.95rem;
  color: #475569;
  text-align: center;
  font-weight: 700;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-top: -25px;
  margin-bottom: 30px;
}

.custom-html-section :deep(.pitfall-list) {
  list-style: none;
  padding: 0;
}

.custom-html-section :deep(.pitfall-list li) {
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  border: 1px dashed #cbd5e1;
}

.custom-html-section :deep(.pitfall-list .wrong) {
  color: #b91c1c;
  font-weight: 700;
}

.custom-html-section :deep(.pitfall-list .right) {
  color: #047857;
  font-weight: 700;
  margin-top: 5px;
  display: block;
}

.custom-html-section :deep(.chapter5-custom .badge) {
  background: linear-gradient(45deg, #10b981 0%, #059669 100%);
  box-shadow: none;
}

.custom-html-section :deep(.chapter5-custom .cta-box) {
  background: linear-gradient(135deg, #ffffff 0%, #fefce8 100%);
  box-shadow: 0 20px 40px -10px rgba(234, 179, 8, 0.15);
}

.custom-html-section :deep(.chapter5-custom .cta-box::before) {
  background: linear-gradient(45deg, #eab308, #f59e0b, #eab308);
}

.custom-html-section :deep(.chapter5-custom .cta-action) {
  background-color: #fff;
  border: 2px dashed #f59e0b;
}

@keyframes custom-breathe {
  0% { opacity: 0.6; filter: blur(2px); }
  100% { opacity: 1; filter: blur(6px); }
}

.custom-html-section :deep(.pulse-btn) {
  box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
  animation: pulse-animation 2s infinite;
  transition: transform 0.2s ease;
}

.custom-html-section :deep(.pulse-btn:hover) {
  transform: scale(1.05);
}

@keyframes pulse-animation {
  0% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
  }
  50% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
  100% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
}

.custom-html-section :deep(.super-pulse-btn),
.cta-modal-html-container :deep(.super-pulse-btn) {
  background: linear-gradient(45deg, #ff0844 0%, #ffb199 100%);
  color: white;
  box-shadow: 0 0 0 0 rgba(255, 8, 68, 0.7);
  animation: super-pulse-animation 1.5s infinite;
  transition: transform 0.2s ease;
}

.custom-html-section :deep(.super-pulse-btn:hover),
.cta-modal-html-container :deep(.super-pulse-btn:hover) {
  transform: scale(1.08);
}

@keyframes super-pulse-animation {
  0% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(255, 8, 68, 0.7), 0 4px 15px rgba(255, 8, 68, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 15px rgba(255, 8, 68, 0), 0 8px 20px rgba(255, 8, 68, 0.6);
  }
  100% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(255, 8, 68, 0), 0 4px 15px rgba(255, 8, 68, 0.4);
  }
}

.custom-html-section :deep(.click-hand-anim),
.cta-modal-html-container :deep(.click-hand-anim) {
  display: inline-block;
  animation: point-right 1.5s ease-in-out infinite;
}

@keyframes point-right {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
}

.chapter-number-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0;
}

.number {
  padding: 8px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.elective-badge {
  padding: 6px 14px;
  background: #f6ffed;
  color: #52c41a;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.chapter-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #262626;
  text-align: left;
  padding: 0;
}

.editing-guide {
  width: 100%;
  max-width: none;
  margin: 0 0 24px 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  color: #111827;
}

.editorial-meta {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
}

.editorial-intro p {
  margin: 0;
  font-size: 17px;
  line-height: 1.95;
  color: #1f2937;
}

.mark-blue {
  background: #dbeafe;
  color: #1d4ed8;
  font-weight: 700;
  padding: 0 4px;
  border-radius: 4px;
}

.mark-yellow {
  background: #fef3c7;
  color: #92400e;
  font-weight: 700;
  padding: 0 4px;
  border-radius: 4px;
}

.text-emphasis {
  font-weight: 700;
  color: #2563eb;
}

.editorial-quote {
  margin: 18px 0 0 0;
  padding: 14px 16px;
  border-left: 4px solid #3b82f6;
  background: #eff6ff;
  color: #1e3a8a;
  font-size: 16px;
  line-height: 1.9;
  border-radius: 0 10px 10px 0;
}

.editorial-reasons {
  margin-top: 24px;
}

.editorial-reasons h2 {
  margin: 0 0 16px 0;
  font-size: 24px;
  color: #111827;
}

.reason-item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  margin-bottom: 18px;
}

.reason-index {
  font-size: 26px;
  font-weight: 700;
  color: #9ca3af;
  line-height: 1;
  padding-top: 2px;
}

.reason-body h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  color: #111827;
}

.reason-body p {
  margin: 0;
  color: #374151;
  line-height: 1.9;
  font-size: 16px;
}

.reason-body ul {
  margin: 0 0 8px 0;
  padding-left: 18px;
  color: #374151;
  line-height: 1.9;
  font-size: 16px;
}

.text-danger {
  color: #ef4444;
  font-weight: 700;
}

.reason-strong {
  margin-top: 6px !important;
  font-weight: 700;
  color: #111827 !important;
}

.reason-keyword {
  font-weight: 700;
  color: #111827;
}

.editorial-divider {
  margin: 20px 0 16px 0;
  border: none;
  height: 1px;
  background: #e5e7eb;
}

.editorial-summary h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  color: #111827;
}

.summary-core {
  margin: 0 0 8px 0;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}

.editorial-summary p {
  margin: 0;
  color: #374151;
  line-height: 1.9;
  font-size: 16px;
}

.summary-strike {
  color: #6b7280;
  text-decoration: line-through;
}

.summary-win {
  color: #16a34a;
  font-weight: 700;
}

.editorial-beginner-box {
  margin-top: 18px;
  border-radius: 12px;
  border: 1px solid #d1fae5;
  background: #ecfdf5;
  padding: 14px 16px;
}

.editorial-beginner-box h4 {
  margin: 0 0 6px 0;
  color: #065f46;
  font-size: 18px;
}

.editorial-beginner-box p {
  margin: 0;
  color: #065f46;
  line-height: 1.8;
  font-size: 15px;
}

.guide-cta-btn {
  margin-top: 12px;
  padding: 9px 14px;
  border-radius: 12px;
  border: 1px solid #a7f3d0;
  color: #065f46;
  background: #d1fae5;
  cursor: pointer;
  font-weight: 700;
  animation: guideBounce 1.8s ease-in-out infinite;
}

.guide-cta-btn:hover {
  background: #bbf7d0;
}

@media (max-width: 768px) {
  .editing-guide {
    padding: 18px 14px;
  }

  .editorial-reasons h2 {
    font-size: 21px;
  }

  .reason-item {
    grid-template-columns: 30px 1fr;
    gap: 10px;
  }

  .reason-index {
    font-size: 22px;
  }

  .reason-body h3 {
    font-size: 18px;
  }

  .practice-flow-track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .flow-step.not-last::after {
    display: none;
  }
}

@keyframes guideBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.learning-intro {
  background: linear-gradient(135deg, #fff7e6 0%, #fff1d6 100%);
  padding: 20px 24px;
  border-radius: 12px;
  border-left: 4px solid #faad14;
  margin-bottom: 16px;
}

.learning-intro h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #d48806;
}

.learning-intro p {
  margin: 0;
  line-height: 1.8;
  color: #434343;
}

.learning-intro-text {
  font-size: 15px;
  line-height: 2;
  letter-spacing: 0.02em;
  color: #3d3d3d;
}

.learning-intro-text :deep(.intro-line) {
  display: block;
  margin-bottom: 6px;
}

.learning-intro-text :deep(.intro-line:last-child) {
  margin-bottom: 0;
}

.learning-intro-text :deep(.intro-highlight) {
  display: inline-block;
  padding: 0 8px;
  margin: 0 2px;
  border-radius: 6px;
  font-weight: 600;
  border: 1px solid transparent;
}

.learning-intro-text :deep(.intro-highlight-key) {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.18);
  color: #1e40af;
}

.learning-intro-text :deep(.intro-highlight-strong) {
  background: rgba(37, 99, 235, 0.14);
  border-color: rgba(37, 99, 235, 0.22);
  color: #1e3a8a;
}

.learning-intro-text :deep(.intro-highlight-warning) {
  background: rgba(100, 116, 139, 0.12);
  border-color: rgba(100, 116, 139, 0.2);
  color: #334155;
}

.learning-intro-text :deep(.intro-highlight-minor) {
  background: transparent;
  border: none;
  color: #1f1f1f;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* 通用section样式 */
.resources-section,
.practice-section,
.assignment-section {
  margin-bottom: 40px;
}

.resources-section h2,
.practice-section h2,
.assignment-section h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #262626;
}

.tool-comparison {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 18px;
  margin-bottom: 18px;
  box-shadow: none;
}

.tool-comparison h3 {
  margin: 0 0 14px 0;
  font-size: 17px;
  font-weight: 700;
  color: #262626;
  padding-left: 10px;
  border-left: 3px solid #d9d9d9;
}

.comparison-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comparison-head,
.comparison-row {
  display: grid;
  grid-template-columns: 110px 1fr 1fr;
  gap: 10px;
}

.comparison-head span {
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  border: 1px solid #e8e8e8;
}

.head-label {
  background: #f5f5f5;
  color: #595959;
}

.head-mj {
  background: #fafafa;
  color: #595959;
}

.head-jimeng {
  background: #fafafa;
  color: #595959;
}

.comparison-dimension {
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 10px 10px;
  font-size: 13px;
  font-weight: 700;
  color: #434343;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comparison-value {
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid transparent;
}

.comparison-value.mj {
  background: #fcfcfc;
  border-color: #eeeeee;
  color: #434343;
}

.comparison-value.jimeng {
  background: #fcfcfc;
  border-color: #eeeeee;
  color: #434343;
}

.tool-comparison ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.tool-comparison li {
  color: #3f3f3f;
  line-height: 1.7;
  margin-bottom: 0;
  background: #fcfcfc;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 10px 12px 10px 34px;
  position: relative;
}

.tool-comparison li::before {
  content: '•';
  position: absolute;
  left: 14px;
  top: 10px;
  color: #8c8c8c;
  font-weight: 700;
}

.comparison-recommendations {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.comparison-recommendations p {
  margin: 0;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fafafa;
  border: 1px solid #e6e6e6;
  color: #434343;
  font-size: 13px;
  line-height: 1.7;
}

.comparison-recommendations :deep(.advice-marker) {
  position: relative;
  display: inline-block;
  z-index: 0;
  color: #262626;
  font-weight: 600;
}

.comparison-recommendations :deep(.advice-marker)::before {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: 1px;
  height: 50%;
  background: rgba(82, 196, 26, 0.24);
  transform: skewX(-12deg);
  border-radius: 3px;
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .comparison-head,
  .comparison-row {
    grid-template-columns: 1fr;
  }

  .comparison-head span {
    text-align: left;
  }

  .tool-comparison ul {
    grid-template-columns: 1fr;
  }

  .comparison-recommendations {
    grid-template-columns: 1fr;
  }
}

/* 学习资源 */
.resource-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.resource-item {
  display: block;
  position: relative;
  width: 100%;
  padding: 20px;
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  transition: all 0.3s;
}

.resource-item.half-width {
  width: calc(50% - 8px);
}

.resource-item.has-video {
  width: 100%;
}

@media (max-width: 768px) {
  .resource-item.half-width {
    width: 100%;
  }

  .resource-video summary {
    font-size: 15px;
    padding: 12px 14px;
  }

  .resource-video video {
    min-height: 240px;
  }
}

.resource-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.resource-item.required {
  border-left-color: #ff4d4f;
  border-left-width: 4px;
}

.resource-item.important {
  border: none;
  border-radius: 0;
  border-left-color: #faad14;
  border-left-width: 0;
}

.resource-item.optional {
  border-left-color: #52c41a;
  border-left-width: 4px;
}

.resource-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  min-width: 44px;
  padding: 4px 10px;
  background: #f0f0f0;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.resource-item.required .resource-badge {
  background: #fff1f0;
  color: #ff4d4f;
}

.resource-item.important .resource-badge {
  background: #fffbe6;
  color: #faad14;
}

.resource-item.optional .resource-badge {
  background: #f6ffed;
  color: #52c41a;
}

.resource-content {
  flex: 1;
  padding-top: 14px;
}

.resource-content h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #262626;
}

.resource-content p {
  font-size: 14px;
  color: #8c8c8c;
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.resource-description {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.resource-desc-highlight {
  color: #ad4e00;
  background: #fff7e6;
  border: 1px solid #ffd591;
  border-radius: 6px;
  padding: 0 6px;
  font-weight: 600;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-link {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.btn-link:hover {
  text-decoration: underline;
}

.duration {
  font-size: 13px;
  color: #8c8c8c;
}

.resource-links {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 10px;
  margin-top: 12px;
}

/* 资源区的主操作按钮独占下一行，形成“放在下方”的层次 */
.resource-links .btn.btn-primary {
  flex-basis: 100%;
  margin-top: 2px;
}

.btn-link-jimeng {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 70px;
  background: #f0f7ff;
  color: #0958d9;
  border: 1px solid #b6d7ff;
  border-radius: 10px;
  padding: 0 16px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(9, 88, 217, 0.1);
  transition: all 0.2s ease;
}

.btn-link-jimeng:hover {
  text-decoration: none;
  background: #e6f4ff;
  border-color: #91caff;
  box-shadow: 0 4px 12px rgba(9, 88, 217, 0.18);
  transform: translateY(-1px);
}

.btn-link-jimeng::after {
  content: '推荐';
  position: absolute;
  top: -7px;
  right: -7px;
  font-size: 10px;
  color: #0958d9;
  background: #ffffff;
  border: 1px solid #91caff;
  border-radius: 999px;
  padding: 1px 5px;
}

.btn-link-video-focus {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 70px;
  background: linear-gradient(135deg, #fa8c16 0%, #d46b08 100%);
  color: #ffffff;
  border-radius: 10px;
  padding: 0 16px;
  white-space: nowrap;
  font-size: 28px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(212, 107, 8, 0.24);
  animation: video-focus-breathe 1.9s ease-in-out infinite;
}

.btn-link-video-focus:hover {
  text-decoration: none;
  filter: brightness(1.06);
}

.btn-link-video-focus::after {
  content: '必看';
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 10px;
  color: #ffffff;
  background: #cf1322;
  border-radius: 999px;
  padding: 1px 6px;
}

@keyframes video-focus-breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 6px 14px rgba(212, 107, 8, 0.24);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 10px 22px rgba(212, 107, 8, 0.34);
  }
}

.resource-link-hint {
  display: inline-flex;
  align-items: center;
  flex-basis: 100%;
  font-size: 12px;
  color: #0958d9;
  font-weight: 600;
  background: #e6f4ff;
  border-radius: 999px;
  padding: 2px 8px;
  margin-top: 2px;
}

.resource-items ul {
  margin: 12px 0 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.resource-items li {
  font-size: 14px;
  margin: 0;
  color: #262626;
  line-height: 1.7;
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.resource-items li :deep(.resource-item-label) {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  color: #0958d9;
  background: #e6f4ff;
  border-radius: 999px;
  padding: 2px 8px;
}

.resource-items li :deep(.resource-item-text) {
  color: #434343;
  font-size: 14px;
  line-height: 1.75;
  text-indent: 4ch;
}

.resource-items li :deep(.motion-keyword) {
  background: #fff1b8;
  border-radius: 4px;
  padding: 1px 4px;
  color: #262626;
}

.resource-video {
  margin-top: 10px;
  margin-bottom: 14px;
}

.resource-video details {
  border: 1px solid #91caff;
  border-radius: 14px;
  background: linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%);
  box-shadow: 0 8px 20px rgba(24, 144, 255, 0.16);
  overflow: hidden;
  transition: all 0.25s ease;
}

.resource-video details:hover {
  border-color: #69b1ff;
  box-shadow: 0 8px 18px rgba(24, 144, 255, 0.14);
}

.resource-video details[open] {
  border-color: #40a9ff;
  box-shadow: 0 10px 20px rgba(24, 144, 255, 0.18);
}

.resource-video summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 17px;
  color: #003a8c;
  font-weight: 700;
  padding: 16px 18px;
  user-select: none;
  outline: none;
  position: relative;
}

.resource-video summary::-webkit-details-marker {
  display: none;
}

.resource-video summary::after {
  content: '先看这里';
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background: #1677ff;
  border-radius: 999px;
  padding: 3px 10px;
  animation: pulseHint 1.6s ease-in-out infinite;
}

.resource-video details[open] summary::after {
  content: '收起视频';
  animation: none;
  background: #f0f5ff;
  color: #1d39c4;
}

.resource-video video {
  margin-top: 0;
  width: 100%;
  min-height: 380px;
  aspect-ratio: 16 / 9;
  border-top: 1px solid #d6e4ff;
  border-radius: 0;
  background: #000;
}

.video-with-guide {
  position: relative;
}

.video-play-guide {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  background: rgba(0, 0, 0, 0.46);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

@keyframes pulseHint {
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.04); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
}

.resource-pdf {
  margin-top: 12px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  overflow: hidden;
}

.resource-pdf-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
}

.resource-pdf-actions span {
  font-size: 12px;
  color: #8c8c8c;
}

.resource-pdf-details summary {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #0958d9;
  background: #f5f9ff;
  user-select: none;
}

.resource-pdf-frame {
  width: 100%;
  height: 640px;
  border: 0;
  background: #fff;
}

/* 实践任务 */
.practice-flow {
  margin-bottom: 20px;
}

.practice-flow-title {
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 700;
  color: #1d39c4;
}

.practice-flow-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  overflow: visible;
  padding: 4px 0 6px 0;
}

.flow-step {
  position: relative;
  border-radius: 12px;
  border: 1px solid #d6e4ff;
  background: #f8fbff;
  padding: 14px 12px;
}

.flow-step.not-last::after {
  display: none;
}

.flow-step.is-current {
  border-color: #91caff;
  box-shadow: 0 4px 14px rgba(22, 119, 255, 0.15);
}

.flow-step-number {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1677ff;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
}

.flow-step h4 {
  margin: 0 0 6px 0;
  color: #1f1f1f;
  font-size: 15px;
  line-height: 1.5;
}

.flow-step p {
  margin: 0;
  color: #595959;
  font-size: 13px;
  line-height: 1.7;
}

.practice-tasks {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.practice-task {
  display: flex;
  gap: 16px;
}

.task-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 0;
}

.task-content {
  flex: 1;
}

.task-content h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #262626;
}

.task-content p {
  font-size: 14px;
  color: #595959;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.task-moved-resources {
  margin: 12px 0 16px 0;
}

.task-moved-resources-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 14px 0;
  color: #262626;
}

.task-resource-list {
  margin-bottom: 14px;
}

.task-example {
  background: transparent;
  padding: 0;
  border-radius: 0;
  border-left: none;
  margin: 12px 0;
}

.task-example strong {
  display: block;
  margin-bottom: 8px;
  color: #52c41a;
}

.task-example p {
  margin: 0;
  font-size: 14px;
}

.task-example .task-example-guide {
  margin-top: 8px;
  color: #1d39c4;
  font-size: 14px;
  line-height: 1.8;
}

.task-example-guide-list {
  margin: 8px 0 0 0;
  padding-left: 18px;
  color: #1d39c4;
  font-size: 14px;
  line-height: 1.8;
}

.task-example-guide-list li {
  margin-bottom: 2px;
}

.task-example-guide-list :deep(.guide-marker) {
  position: relative;
  display: inline-block;
  z-index: 0;
  color: #1d39c4;
  font-weight: 700;
}

.task-example-guide-list :deep(.guide-marker)::before {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: 1px;
  height: 50%;
  background: rgba(82, 196, 26, 0.24);
  transform: skewX(-12deg);
  border-radius: 3px;
  z-index: -1;
  pointer-events: none;
}

.narrative-flow {
  margin-top: 6px;
  display: flex;
  align-items: stretch;
  gap: 8px;
}

.narrative-card {
  flex: 1;
  min-width: 0;
  position: relative;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)),
    repeating-linear-gradient(
      -45deg,
      #f5f5f5 0 10px,
      #efefef 10px 20px
    );
  border: 2px dashed #cfcfcf;
  border-radius: 10px;
  padding: 12px;
}

.narrative-card::after {
  content: '🖼';
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 14px;
  opacity: 0.45;
}

.narrative-card-index {
  color: #8c8c8c;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 600;
}

.narrative-card-text {
  color: #595959;
  font-size: 13px;
  line-height: 1.5;
}

.narrative-arrow {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bfbfbf;
  font-size: 16px;
  font-weight: 700;
  user-select: none;
}

.example-images-grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.example-images-grid img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}

.example-videos-grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.example-videos-label {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: #003a8c;
  background: #e6f4ff;
  border: 1px solid #91caff;
  border-radius: 999px;
  padding: 3px 10px;
}

.example-videos-grid video {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #000;
}

.script-example-box {
  margin-top: 16px;
  background: #ffffff;
  border-radius: 8px;
  padding: 0;
}

.script-core {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #d9f7be;
}

.script-core .label,
.script-breakdown .label {
  display: block;
  font-weight: 600;
  color: #389e0d;
  margin-bottom: 8px;
  font-size: 14px;
}

.script-core p {
  margin: 0;
  color: #262626;
  font-size: 15px;
  line-height: 1.6;
}

.script-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.script-card {
  background: #f6ffed;
  border: 1px solid #e2f0d9;
  border-radius: 6px;
  padding: 12px;
}

.script-card-header {
  font-weight: 600;
  color: #52c41a;
  margin-bottom: 8px;
  font-size: 13px;
  border-bottom: 1px solid #e2f0d9;
  padding-bottom: 6px;
}

.script-card-body {
  color: #595959;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .script-grid {
    grid-template-columns: 1fr;
  }
}

.interactive-quiz {
  margin-top: 24px;
  background: #f9f0ff;
  border: 1px solid #d3adf7;
  border-radius: 8px;
  padding: 20px;
}

.quiz-question {
  margin-bottom: 16px;
}

.quiz-question strong {
  display: block;
  color: #531dab;
  font-size: 16px;
  margin-bottom: 8px;
}

.quiz-question p {
  margin: 0;
  color: #3f3f3f;
  font-size: 15px;
  line-height: 1.6;
}

.quiz-scene-list {
  margin: 8px 0 0 0;
  padding: 0;
  list-style: none;
}

.quiz-scene-list li {
  position: relative;
  padding-left: 12px;
  margin-bottom: 4px;
  color: #8c8c8c;
  font-size: 13px;
  line-height: 1.45;
}

.quiz-scene-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bfbfbf;
}

.quiz-options {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.btn-quiz-option {
  flex: 1;
  padding: 10px 20px;
  background: #ffffff;
  border: 1px solid #b37feb;
  color: #531dab;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-quiz-option:hover {
  background: #f0f5ff;
  border-color: #9254de;
  color: #391085;
}

.quiz-answer-box {
  margin-top: 8px;
  padding: 16px;
  border-radius: 8px;
  background: #fff1f0;
  border: 1px solid #ffa39e;
}

.quiz-answer-box.is-correct {
  background: #f6ffed;
  border-color: #b7eb8f;
}

.answer-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 16px;
}

.answer-header .result-icon {
  font-size: 18px;
}

.quiz-answer-box.is-correct .answer-header strong {
  color: #389e0d;
}

.quiz-answer-box:not(.is-correct) .answer-header strong {
  color: #cf1322;
}

.answer-content {
  color: #595959;
  font-size: 14px;
  line-height: 1.7;
}

.answer-content :deep(p) {
  margin: 0 0 12px 0;
}

.answer-content :deep(p:last-child) {
  margin-bottom: 0;
}

.answer-content :deep(strong) {
  color: #262626;
}

.answer-content :deep(h4) {
  margin: 16px 0 8px 0;
  color: #1d39c4;
  font-size: 15px;
}

.answer-content :deep(.quiz-divider) {
  border: none;
  border-top: 1px solid #d9d9d9;
  margin: 16px 0 10px 0;
}

.answer-content :deep(.quiz-emphasis) {
  display: block;
  width: fit-content;
  max-width: calc(100% - 4em);
  margin-top: 6px;
  margin-left: 4em;
  background: #fff1b8;
  border-radius: 4px;
  padding: 4px 8px;
  text-indent: 0;
  line-height: 1.7;
}

.ai-assist-card {
  background: #f0f5ff;
  border: 1px solid #adc6ff;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.ai-assist-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
}

.btn-sm {
  padding: 4px 12px;
  font-size: 13px;
}

.ai-assist-content p {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #595959;
}

.prompt-box {
  position: relative;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px;
  padding-right: 70px;
}

.prompt-box code {
  font-family: inherit;
  font-size: 14px;
  color: #262626;
  white-space: pre-wrap;
  word-break: break-all;
}

.prompt-box code :deep(.prompt-highlight) {
  color: #389e0d;
  font-weight: 400;
  font-size: 13px;
}

.prompt-note {
  margin: 8px 0 0 0;
  color: #389e0d;
  font-size: 12px;
  line-height: 1.6;
  position: relative;
  display: inline-block;
  z-index: 0;
}

.prompt-note::before {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: 2px;
  height: 50%;
  background: rgba(82, 196, 26, 0.28);
  transform: skewX(-12deg);
  border-radius: 3px;
  z-index: -1;
  pointer-events: none;
}

.prompt-box .copy-prompt-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}

.ai-result-showcase {
  margin-top: 24px;
  border-top: 1px dashed #adc6ff;
  padding-top: 20px;
}

.ai-result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-weight: 600;
  color: #096dd9;
  margin-bottom: 16px;
  font-size: 15px;
}

.ai-result-note {
  color: #ad4e00;
  background: rgba(255, 236, 179, 0.85);
  border: 1px solid #ffd666;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .ai-result-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

.ai-result-item {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #e6f7ff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.ai-result-item:last-child {
  margin-bottom: 0;
}

.ai-result-item h5 {
  margin: 0 0 8px 0;
  color: #1d39c4;
  font-size: 15px;
}

.ai-result-item .desc {
  color: #595959;
  margin-bottom: 12px;
  font-size: 14px;
}

.result-prompt {
  background: #fafafa;
  border-color: #e8e8e8;
  margin-bottom: 12px;
}

.ai-result-item .translation {
  color: #8c8c8c;
  font-size: 13px;
  margin: 0;
  line-height: 1.6;
}

.task-tips-list {
  padding: 0;
  margin: 16px 0;
}

.task-tips-list strong {
  display: block;
  color: #52c41a;
  margin-bottom: 8px;
}

.task-tips-list ul {
  margin: 0;
  padding-left: 20px;
}

.task-tips-list li {
  font-size: 14px;
  color: #595959;
  line-height: 1.6;
  margin-bottom: 4px;
}

.task-tips-list li:last-child {
  margin-bottom: 0;
}

.task-tips-list li strong {
  display: inline;
  color: #595959;
  font-weight: 600;
  margin-bottom: 0;
}

.shots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 16px 0;
}

.shot-card {
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.shot-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #1890ff;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  margin-bottom: 8px;
}

.shot-info strong {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: #262626;
}

.shot-info p {
  font-size: 12px;
  color: #8c8c8c;
  margin: 0;
}

.shot-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.shot-prompt {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding: 34px 10px 10px 10px;
  background: #f7f9fc;
  border: 1px solid #d6e4ff;
  border-radius: 6px;
  color: #1f1f1f !important;
  font-size: 12px;
  line-height: 1.7;
  word-break: break-word;
}

.shot-prompt-wrap {
  margin-top: 0;
  position: relative;
  flex: 1;
  display: flex;
}

.shot-prompt-wrap .shot-prompt {
  width: 100%;
  height: 100%;
}

.copy-prompt-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #d9d9d9;
  background: #ffffff;
  color: #8c8c8c;
  border-radius: 0;
  font-size: 11px;
  line-height: 1;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-prompt-btn:hover {
  background: #fafafa;
  color: #595959;
  border-color: #bfbfbf;
}

.copy-prompt-btn.copied {
  border-color: #b7eb8f;
  background: #f6ffed;
  color: #389e0d;
}

.tools-list {
  margin: 16px 0;
}

.task-action-links {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.task-action-links .btn {
  flex: 1;
}

.tool-item {
  padding: 12px;
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  margin-bottom: 8px;
}

.task-tips {
  background: #e6f7ff;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #1890ff;
  margin: 12px 0;
}

.task-tips strong {
  display: block;
  margin-bottom: 8px;
  color: #1890ff;
}

.task-tips ul {
  margin: 0;
  padding-left: 20px;
}

.task-tips li {
  font-size: 14px;
  margin-bottom: 4px;
}

.lessons-list ul,
.tasks-list ul {
  margin: 12px 0;
  padding-left: 20px;
}

.lessons-list li,
.tasks-list li {
  font-size: 14px;
  margin-bottom: 8px;
  color: #262626;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.skill-tag {
  padding: 6px 14px;
  background: #f0f0f0;
  border-radius: 16px;
  font-size: 13px;
  color: #262626;
}

/* 作业章节 */
.assignment-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.assignment-card {
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
}

.assignment-card.required {
  border-color: #1890ff;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.02) 0%, rgba(24, 144, 255, 0.05) 100%);
}

.assignment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.assignment-header h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #262626;
}

.assignment-badge {
  padding: 6px 14px;
  background: #ff4d4f;
  color: white;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
}

.assignment-status {
  font-size: 14px;
  color: #8c8c8c;
  margin: 0 0 16px 0;
}

.assignment-requirements,
.submit-steps,
.assignment-tools,
.assignment-tips {
  background: #fafafa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.assignment-requirements h4,
.submit-steps h4,
.assignment-tools h4,
.assignment-tips h4 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #262626;
}

.assignment-requirements ul {
  margin: 0;
  padding-left: 20px;
}

.assignment-requirements li {
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 1.6;
}

.submit-step {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.submit-step:last-child {
  margin-bottom: 0;
}

.step-num {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1890ff;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
}

.submit-step p {
  margin: 0;
  font-size: 14px;
}

.submit-step code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  color: #1890ff;
}

.assignment-tips p {
  margin: 0;
  font-size: 14px;
  color: #595959;
}

/* 本章任务上方作业模块 */
.pre-task-module {
  background: #fff7e6;
  border: 1px solid #ffd591;
  border-left: 4px solid #fa8c16;
  border-radius: 10px;
  padding: 18px 20px;
  margin-top: 24px;
  margin-bottom: 16px;
}

.pre-task-module h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #ad4e00;
}

.pre-task-module p {
  margin: 0 0 8px 0;
  color: #593815;
  line-height: 1.7;
}

.pre-task-submit a {
  color: #0958d9;
  text-decoration: underline;
}

.pre-task-note {
  font-size: 13px;
  color: #8c8c8c;
}

/* 本章任务卡片 */
.chapter-task-card {
  background: linear-gradient(135deg, #f6ffed 0%, #f0f9ff 100%);
  border: 2px solid #52c41a;
  border-radius: 12px;
  padding: 32px 344px 32px 32px;
  margin-top: 40px;
  display: block;
  position: relative;
  min-height: 196px;
  text-align: left;
}

.chapter-task-main {
  width: 100%;
}

.chapter-task-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #262626;
}

.task-checkbox {
  margin-bottom: 16px;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #262626;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-tips {
  font-size: 14px;
  color: #8c8c8c;
  margin: 0;
}

/* 按钮样式 */
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
  text-decoration: none;
  transition: all 0.3s;
}

.btn-primary {
  background: #1890ff;
  color: white;
}

.btn-primary:hover {
  background: #40a9ff;
}

.btn-outline {
  background: transparent;
  border: 1px solid #d9d9d9;
  color: #262626;
}

.btn-outline:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.btn-complete {
  background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
  color: white;
  padding: 12px 32px;
  font-size: 16px;
}

.btn-complete:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

.btn-next {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 32px;
  font-size: 16px;
  margin-top: 4px;
}

.btn-next:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.completed-message {
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 280px;
  text-align: center;
  will-change: transform, opacity;
}

.success-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.completed-message h4 {
  font-size: 20px;
  color: #52c41a;
  margin: 0 0 4px 0;
}

.task-complete-enter-active,
.task-complete-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.task-complete-enter-from,
.task-complete-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.task-complete-enter-to,
.task-complete-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 24px 16px;
  }

  .chapter-content:not(.has-custom-html) {
    padding: 24px 16px;
  }

  .chapter-title {
    font-size: 24px;
  }

  .practice-task {
    flex-direction: column;
  }

  .shots-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .example-images-grid {
    grid-template-columns: repeat(4, minmax(180px, 1fr));
  }

  .example-videos-grid {
    grid-template-columns: repeat(4, minmax(180px, 1fr));
  }

  .narrative-flow {
    flex-direction: column;
  }

  .narrative-arrow {
    width: auto;
    height: 14px;
    transform: rotate(90deg);
  }

  .chapter-task-card {
    padding: 32px;
    text-align: center;
    min-height: auto;
  }

  .chapter-task-main {
    width: 100%;
  }

  .chapter-task-card .completed-message {
    position: static;
    margin-top: 12px;
    width: auto;
  }
}

/* 任务完成弹出彩蛋样式 */
.cta-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-modal-content {
  border-radius: 16px;
  max-width: 650px;
  width: 90%;
  position: relative;
  box-shadow: 0 0 50px rgba(16, 185, 129, 0.4), 0 0 100px rgba(79, 70, 229, 0.3);
  animation: modal-explode 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  padding: 4px;
  background: transparent;
}

.cta-modal-content::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background: linear-gradient(45deg, #3b82f6, #10b981, #f59e0b, #3b82f6);
  background-size: 300% 300%;
  border-radius: 20px;
  z-index: -1;
  animation: gradient-rotate 3s ease infinite, explode-glow 1s ease-out;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes explode-glow {
  0% { filter: blur(30px); opacity: 0; transform: scale(0.5); }
  50% { filter: blur(50px); opacity: 1; transform: scale(1.1); }
  100% { filter: blur(20px); opacity: 0.9; transform: scale(1); }
}

@keyframes modal-explode {
  0% { transform: scale(0.1) translateY(200px); opacity: 0; }
  60% { transform: scale(1.05) translateY(-10px); opacity: 1; }
  80% { transform: scale(0.98) translateY(5px); }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.cta-modal-close {
  position: absolute;
  top: -18px;
  right: -18px;
  width: 44px;
  height: 44px;
  background: #0f172a;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50%;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.4);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s;
}

.cta-modal-close:hover {
  transform: scale(1.15) rotate(90deg);
  background: #ef4444;
}

.cta-modal-html-container {
  background: #fff;
  border-radius: 14px;
  overflow: visible;
  position: relative;
  z-index: 1;
}

.cta-modal-html-container :deep(.cta-box) {
  margin-top: 0;
  box-shadow: none;
  border: none;
  border-radius: 14px;
  overflow: visible;
}
.cta-modal-html-container :deep(.cta-box::before) {
  display: none;
}

.cta-modal-pop-enter-active,
.cta-modal-pop-leave-active {
  transition: opacity 0.3s ease;
}
.cta-modal-pop-enter-from,
.cta-modal-pop-leave-to {
  opacity: 0;
}

.magic-copy-hint {
  position: fixed;
  z-index: 10001;
  background: rgba(15, 23, 42, 0.92);
  color: #ffffff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.copy-hint-fade-enter-active,
.copy-hint-fade-leave-active {
  transition: all 0.18s ease;
}

.copy-hint-fade-enter-from,
.copy-hint-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
