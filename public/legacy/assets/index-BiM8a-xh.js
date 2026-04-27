const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Overview-BDawH9hX.js","assets/_plugin-vue_export-helper-B0Jp8OmF.js","assets/Overview-nAZuyCSQ.css","assets/Overview-l1q-on53.js","assets/Accordion-bq_ZQrDG.js","assets/Accordion-CHD7EK2h.css","assets/Overview-CHYl_27u.css","assets/Overview-BwBZALp3.js","assets/Overview-1Fb3mqpw.css","assets/Overview-C3l840BE.js","assets/Overview-hCLnUjOE.css","assets/Lesson-DvZEofpr.js","assets/Lesson--WOmYH-h.css"])))=>i.map(i=>d[i]);
import{C as e,D as t,H as n,R as r,T as i,U as a,W as o,a as s,d as c,f as l,g as u,h as d,n as f,p,r as m,s as ee,t as h,w as g,y as _}from"./_plugin-vue_export-helper-B0Jp8OmF.js";import{n as v,t as y}from"./pinia-DUakW4FZ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var b=`pusa_learning_progress`;function x(){try{let e=localStorage.getItem(b);return e?JSON.parse(e):{userId:`user_`+Date.now(),progress:{},overallProgress:0,lastAccessed:null}}catch(e){return console.error(`读取进度失败:`,e),null}}function S(e){try{return e.lastAccessed=new Date().toISOString(),localStorage.setItem(b,JSON.stringify(e)),!0}catch(e){return console.error(`保存进度失败:`,e),!1}}function C(e,t){let n=x();return n?(n.progress[e]||(n.progress[e]={completed:!1,lessons:{},totalProgress:0}),n.progress[e].lessons[t]={completed:!0,timestamp:new Date().toISOString()},S(n),!0):!1}function w(e,t){let n=x();return!n||!n.progress[e]?!1:n.progress[e].lessons?.[t]?.completed||!1}var T=[{id:`week1`,title:`第1周：新手入门基础篇（上）`,icon:`🔰`,description:`掌握AI视频创作的基础流程`,gradient:`var(--week1-gradient)`,color:`#667eea`,skills:[`AI出图`,`视频生成`,`基础剪辑`],lessons:[{id:`overview`,title:`课程概览 & 学习路径`,duration:5,type:`intro`,required:!0},{id:`imageGen`,title:`任务1-1：出图技巧（即梦AI教程）`,duration:15,type:`video`,videoUrl:`https://fclive.pandacollege.cn/p/2wrYTR`,required:!0},{id:`videoGen`,title:`任务1-2：图生视频`,duration:10,type:`practice`,required:!0},{id:`editing`,title:`任务1-3：基础剪辑（剪映）`,duration:20,type:`video`,required:!0},{id:`photoBasics`,title:`任务2：摄影基础与提示词`,duration:15,type:`video`,required:!0},{id:`visualLanguage`,title:`选修：视听语言入门`,duration:10,type:`video`,required:!1},{id:`assignment`,title:`作业提交`,duration:30,type:`assignment`,formUrl:`https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf`,required:!0}]},{id:`week2`,title:`第2周：AI音乐基础`,icon:`🎧`,description:`让音乐成为视频的灵魂`,gradient:`var(--week2-gradient)`,color:`#f5576c`,skills:[`音乐理论`,`SUNO工具`,`配乐技巧`],lessons:[{id:`overview`,title:`音乐在视频中的作用`,duration:10,type:`intro`,required:!0},{id:`musicTheory`,title:`音乐风格与提示词基础`,duration:15,type:`video`,required:!0},{id:`suno`,title:`SUNO工具使用教程`,duration:20,type:`practice`,required:!0},{id:`cases`,title:`实战案例分析`,duration:15,type:`video`,required:!0},{id:`assignment`,title:`作业布置与提交`,duration:30,type:`assignment`,required:!0}]},{id:`week3`,title:`第3周：景别&运镜`,icon:`📹`,description:`掌握镜头语言的核心`,gradient:`var(--week3-gradient)`,color:`#4facfe`,skills:[`景别分类`,`运镜技巧`,`镜头调度`],lessons:[{id:`overview`,title:`景别运镜概览`,duration:10,type:`intro`,required:!0},{id:`shotsBasic`,title:`景别分类详解（远/中/近/特）`,duration:15,type:`video`,required:!0},{id:`shotsAdvanced`,title:`景别分类详解（天文/显微）`,duration:10,type:`practice`,required:!0},{id:`prompts`,title:`核心公式与提示词`,duration:15,type:`practice`,required:!0},{id:`aiMovement`,title:`AI运镜技巧`,duration:10,type:`practice`,required:!0},{id:`assignment`,title:`实战任务与提交`,duration:30,type:`assignment`,formUrl:`https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf`,required:!0}]},{id:`week4`,title:`第4周：视听语言-拉片`,icon:`🎞`,description:`从观众到创作者的进阶之路`,gradient:`var(--week4-gradient)`,color:`#43e97b`,skills:[`拉片方法`,`镜头分析`,`创作思路`],lessons:[{id:`overview`,title:`什么是拉片？`,duration:10,type:`intro`,required:!0},{id:`mindset`,title:`从观众到创作者`,duration:15,type:`video`,required:!0},{id:`methodology`,title:`拉片方法论`,duration:20,type:`video`,required:!0},{id:`tools`,title:`拉片工具与技巧`,duration:15,type:`practice`,required:!0},{id:`cases`,title:`实战案例分析`,duration:15,type:`video`,required:!0},{id:`assignment`,title:`作业与作品赏析`,duration:30,type:`assignment`,required:!0}]}];function E(e){let t=0,n=0;return T.forEach(r=>{r.lessons.forEach(i=>{if(i.required){t++;let a=e[r.id];a&&a.lessons&&a.lessons[i.id]?.completed&&n++}})}),t>0?n/t*100:0}function D(e,t){let n=T.find(t=>t.id===e);if(!n)return 0;let r=t[e];if(!r||!r.lessons)return 0;let i=0,a=0;return n.lessons.forEach(e=>{e.required&&(i++,r.lessons[e.id]?.completed&&a++)}),i>0?a/i*100:0}var O=v(`progress`,()=>{let e=r(x());return{progressData:e,overallProgress:l(()=>e.value?.progress?E(e.value.progress):0),stats:l(()=>{let t=0,n=0;return Object.values(e.value?.progress||{}).forEach(e=>{Object.values(e.lessons||{}).forEach(e=>{t++,e.completed&&n++})}),{total:t,completed:n,percentage:t>0?n/t*100:0}}),lastAccessedLesson:l(()=>{let t=null,n=null;return Object.keys(e.value?.progress||{}).forEach(r=>{let i=e.value.progress[r];Object.keys(i.lessons||{}).forEach(e=>{let a=i.lessons[e];a.timestamp&&(!n||new Date(a.timestamp)>new Date(n))&&(n=a.timestamp,t={weekId:r,lessonId:e})})}),t}),getWeekProgressData:t=>l(()=>{if(!e.value?.progress[t])return{completed:!1,lessons:{},totalProgress:0};let n=D(t,e.value.progress);return{...e.value.progress[t],totalProgress:n}}),checkLessonComplete:(e,t)=>w(e,t),completeLesson:async(t,n)=>{let r=C(t,n);return r&&(e.value=x()),r},refreshProgress:()=>{e.value=x()}}}),k=v(`chapterProgress`,()=>{let e=r({}),t=()=>(e.value.bonusDocuments||(e.value.bonusDocuments={}),e.value.bonusDocuments),n=()=>{try{let t=localStorage.getItem(`chapterProgress`);t&&(e.value=JSON.parse(t))}catch(e){console.error(`Failed to load chapter progress:`,e)}},i=()=>{try{localStorage.setItem(`chapterProgress`,JSON.stringify(e.value))}catch(e){console.error(`Failed to save chapter progress:`,e)}},a=t=>(e.value[t]||(e.value[t]={chapters:{},currentChapter:null,startedAt:null,completedAt:null}),e.value[t]),o=(e,t)=>{let n=a(e).chapters[t];return{completed:n?.completed||!1,completedAt:n?.completedAt||null,taskChecked:n?.taskChecked||!1}},s=(e,t)=>{let n=a(e);n.startedAt||=new Date().toISOString(),n.currentChapter=t,i()},c=(e,t)=>{let n=a(e);n.chapters[t]||(n.chapters[t]={}),n.chapters[t].taskChecked=!0,n.chapters[t].completedAt=new Date().toISOString(),i()},u=(e,t)=>{let n=a(e);n.chapters[t]||(n.chapters[t]={}),n.chapters[t].completed=!0,n.chapters[t].taskChecked=!0,n.chapters[t].completedAt=new Date().toISOString(),Object.keys(n.chapters).every(e=>n.chapters[e]?.completed)&&(n.completedAt=new Date().toISOString()),i()},d=e=>{if(!e?.url)return;let n=t(),r=e.id||`${e.weekId||`week`}-${e.chapterId||e.url}`;n[r]={id:r,weekId:e.weekId||null,chapterId:e.chapterId||null,title:e.title||`彩蛋文档`,description:e.description||``,url:e.url,sourceTitle:e.sourceTitle||``,unlockedAt:n[r]?.unlockedAt||new Date().toISOString()},i()},f=l(()=>{let e=t();return Object.values(e).filter(e=>e?.url).sort((e,t)=>new Date(e.unlockedAt||0)-new Date(t.unlockedAt||0))});return n(),{chapterProgress:e,getWeekProgress:a,getChapterStatus:o,setCurrentChapter:s,completeChapterTask:c,completeChapter:u,unlockBonusDocument:d,unlockedBonusDocuments:f,calculateWeekProgress:(e,t)=>{let n=a(e).chapters,r=0;return Object.values(n).forEach(e=>{e.completed&&r++}),{completed:r,total:t,percentage:t>0?r/t*100:0}},getNextChapter:(e,t)=>{let n=a(e);for(let e of t){let t=n.chapters[e];if(!t||!t.completed)return e}return null},resetWeekProgress:t=>{e.value[t]={chapters:{},currentChapter:null,startedAt:null,completedAt:null},i()},clearAllProgress:()=>{e.value={},i()}}}),A=[{id:`chapter1`,number:1,title:`出图技巧：用4张图讲一个故事`,icon:`🎨`,learningIntro:`做AI视频之前先出图，是因为“图”决定了视频的内容质量。先把角色、场景、氛围和镜头节奏在静态画面里定清楚，后面图生视频才会稳定、连贯，不容易出现人物变形或风格跳变。你可以把这一步理解为拍片前的分镜和美术设定：先把故事讲明白，再让它动起来。`,customHtml:`
<style>
    .chapter1-suno {
        --bg-base: #f8fafc;
        --bg-card: #ffffff;
        --text-main: #334155;
        --text-title: #0f172a;
        --accent-primary: #4f46e5;
        --accent-secondary: #0ea5e9;
        --accent-success: #10b981;
        --accent-warning: #f59e0b;
        --accent-danger: #ef4444;
        --accent-purple: #8b5cf6;
        --border-color: #e2e8f0;
        --highlight-yellow: rgba(253, 224, 71, 0.6);
        font-family: 'Noto Sans SC', -apple-system, sans-serif;
        background-color: var(--bg-base);
        color: var(--text-main);
        line-height: 1.85;
        margin: 0;
        padding: 40px 15px;
        font-size: 16px;
    }
    .chapter1-suno .container {
        max-width: 860px;
        margin: 0 auto;
    }
    .chapter1-suno h1 {
        font-size: 2.3rem;
        line-height: 1.4;
        text-align: center;
        background: linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 50px;
        font-weight: 900;
        letter-spacing: 1px;
    }
    .chapter1-suno h2 {
        font-size: 1.7rem;
        color: var(--text-title);
        margin-top: 60px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 12px;
    }
    .chapter1-suno .alert-box {
        background-color: #fffbeb;
        border: 2px dashed #fcd34d;
        padding: 30px;
        border-radius: 12px;
        margin-bottom: 50px;
        box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.05);
        position: relative;
    }
    .chapter1-suno .alert-box::before {
        content: '💡 小白最致命的工作流误区';
        position: absolute;
        top: -14px;
        left: 20px;
        background: var(--accent-warning);
        color: #fff;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 900;
        letter-spacing: 1px;
    }
    .chapter1-suno .alert-title {
        color: #b45309;
        font-size: 1.3rem;
        font-weight: 900;
        margin-bottom: 15px;
        margin-top: 5px;
    }
    .chapter1-suno .alert-box p {
        margin-bottom: 12px;
    }
    .chapter1-suno .workflow-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--bg-card);
        padding: 30px 20px;
        border-radius: 12px;
        border: 1px solid var(--border-color);
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.03);
        margin-bottom: 40px;
        flex-wrap: wrap;
        gap: 15px;
    }
    .chapter1-suno .step-box {
        text-align: center;
        flex: 1;
        min-width: 120px;
    }
    .chapter1-suno .step-num {
        background: var(--border-color);
        color: #64748b;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
        font-weight: 900;
        margin-bottom: 10px;
    }
    .chapter1-suno .step-box.active .step-num {
        background: var(--accent-purple);
        color: #fff;
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
    }
    .chapter1-suno .step-title {
        font-weight: 900;
        color: var(--text-title);
        font-size: 1.05rem;
        margin-bottom: 5px;
    }
    .chapter1-suno .step-desc {
        font-size: 0.85rem;
        color: #64748b;
    }
    .chapter1-suno .arrow {
        color: #cbd5e1;
        font-size: 1.5rem;
    }
    .chapter1-suno .theory-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 50px;
    }
    .chapter1-suno .theory-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03);
        border-top: 4px solid var(--accent-purple);
    }
    .chapter1-suno .theory-card h3 {
        margin-top: 0;
        color: var(--text-title);
        font-size: 1.2rem;
        border-bottom: 1px dashed var(--border-color);
        padding-bottom: 10px;
        margin-bottom: 15px;
    }
    .chapter1-suno .must-learn-wrap {
        background: rgba(79, 70, 229, 0.05);
        border: 1px dashed #818cf8;
        border-radius: 12px;
        padding: 16px 18px;
        margin: 8px 0 24px;
    }
    .chapter1-suno .must-learn-layout {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 14px;
        align-items: stretch;
    }
    .chapter1-suno .must-learn-intro {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-left: 5px solid #f59e0b;
        border-radius: 10px;
        padding: 14px 14px 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    }
    .chapter1-suno .must-learn-intro-title {
        margin: 0 0 6px 0;
        color: #9a3412;
        font-size: 1rem;
        font-weight: 900;
    }
    .chapter1-suno .must-learn-intro-sub {
        margin: 0 0 10px 0;
        color: #475569;
        font-size: 0.9rem;
        line-height: 1.7;
    }
    .chapter1-suno .must-learn-intro-section {
        margin: 0 0 10px 0;
    }
    .chapter1-suno .must-learn-intro-h {
        margin: 0 0 6px 0;
        color: #7c2d12;
        font-size: 0.92rem;
        font-weight: 900;
    }
    .chapter1-suno .must-learn-intro-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
    }
    .chapter1-suno .must-learn-intro-list li {
        margin: 0 0 6px 0;
        color: #334155;
        line-height: 1.65;
        font-size: 0.88rem;
    }
    .chapter1-suno .must-learn-intro-list strong {
        color: #0f172a;
    }
    .chapter1-suno .must-learn-intro-end {
        margin: 4px 0 0 0;
        color: #4f46e5;
        font-size: 0.9rem;
        font-weight: 800;
    }
    .chapter1-suno .must-learn-title {
        margin: 0 0 8px 0;
        color: #4f46e5;
        font-size: 1.1rem;
        font-weight: 900;
    }
    .chapter1-suno .must-learn-desc {
        margin: 0 0 12px 0;
        color: #64748b;
        font-size: 0.92rem;
        line-height: 1.7;
    }
    .chapter1-suno .must-learn-grid {
        display: block;
    }
    .chapter1-suno .must-learn-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 14px 14px 13px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
    }
    .chapter1-suno .must-learn-meta {
        margin: 0 0 6px 0;
        color: #475569;
        font-size: 0.92rem;
    }
    .chapter1-suno .must-learn-label {
        margin: 0 0 8px 0;
        color: #0f172a;
        font-size: 1.05rem;
        font-weight: 900;
    }
    .chapter1-suno .must-learn-row {
        display: flex;
        align-items: center;
        gap: 9px;
        flex-wrap: wrap;
        margin-bottom: 0;
    }
    .chapter1-suno .must-learn-hand {
        font-size: 1.2rem;
        animation: chapter1HandNudge 1.1s ease-in-out infinite;
        transform-origin: center;
        user-select: none;
    }
    .chapter1-suno .must-learn-btn {
        display: inline-block;
        background: linear-gradient(120deg, #8b5cf6, #7c3aed, #8b5cf6);
        background-size: 220% 220%;
        color: #ffffff;
        text-decoration: none;
        font-weight: 800;
        padding: 9px 14px;
        border-radius: 8px;
        box-shadow: 0 8px 16px rgba(124, 58, 237, 0.28);
        animation: chapter1GradientBreath 3s ease-in-out infinite, chapter1BtnBreath 1.8s ease-in-out infinite;
    }
    .chapter1-suno .must-learn-note {
        margin: 0;
        color: #64748b;
        font-size: 0.9rem;
        line-height: 1.65;
    }
    .chapter1-suno .tool-box {
        background: #ffffff;
        border: 1px solid #ddd6fe;
        border-left: 5px solid #8b5cf6;
        border-radius: 12px;
        padding: 18px 18px 16px;
        margin: 0 0 24px 0;
        box-shadow: 0 6px 14px rgba(139, 92, 246, 0.08);
    }
    .chapter1-suno .tool-title {
        margin: 0 0 10px 0;
        font-size: 1.06rem;
        color: #5b21b6;
        font-weight: 900;
    }
    .chapter1-suno .tool-item {
        margin: 0 0 10px 0;
        color: #334155;
        line-height: 1.7;
    }
    .chapter1-suno .tool-item .tag-reco {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 900;
        color: #ffffff;
        background: #10b981;
        padding: 2px 8px;
        border-radius: 999px;
        margin-right: 8px;
        vertical-align: middle;
    }
    .chapter1-suno .tool-link {
        color: #6d28d9;
        font-weight: 800;
        text-decoration: none;
        border-bottom: 1px dashed #a78bfa;
    }
    .chapter1-suno .tool-link:hover {
        color: #4c1d95;
        border-bottom-color: #7c3aed;
    }
    .chapter1-suno .tool-note {
        margin: 6px 0 0 0;
        color: #64748b;
        font-size: 0.92rem;
        line-height: 1.7;
    }
    .chapter1-suno .tool-item.tool-manual {
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }
    .chapter1-suno .tool-item.tool-manual .manual-icon {
        color: #f59e0b;
        font-size: 1rem;
        line-height: 1.7;
    }
    .chapter1-suno .tool-item.tool-manual .manual-highlight {
        position: relative;
        display: inline-block;
        font-weight: 800;
        z-index: 0;
    }
    .chapter1-suno .tool-item.tool-manual .manual-highlight::before {
        content: '';
        position: absolute;
        left: -3px;
        right: -3px;
        bottom: 3px;
        height: 54%;
        background: rgba(253, 224, 71, 0.65);
        transform: skewX(-12deg);
        border-radius: 3px;
        z-index: -1;
    }
    @keyframes chapter1HandNudge {
        0%, 100% { transform: translateX(0) scale(1); opacity: 0.9; }
        50% { transform: translateX(4px) scale(1.08); opacity: 1; }
    }
    @keyframes chapter1GradientBreath {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes chapter1BtnBreath {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
    }
    .chapter1-suno .music-match-card {
        background-color: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        margin-bottom: 30px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        display: flex;
    }
    .chapter1-suno .music-left {
        background: #f8fafc;
        padding: 25px;
        width: 35%;
        border-right: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .chapter1-suno .music-right {
        padding: 25px;
        width: 65%;
    }
    .chapter1-suno .suno-tag {
        background-color: #ede9fe;
        color: #6d28d9;
        font-family: 'Courier New', Courier, monospace;
        padding: 4px 10px;
        border-radius: 6px;
        border: 1px solid #c4b5fd;
        font-size: 0.9rem;
        font-weight: bold;
        display: inline-block;
        margin: 3px 0;
    }
    .chapter1-suno .edit-tips {
        list-style: none;
        padding: 0;
    }
    .chapter1-suno .edit-tips li {
        background: #fff;
        border: 1px solid var(--border-color);
        border-left: 4px solid var(--accent-secondary);
        padding: 20px;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .chapter1-suno .edit-tips h4 {
        margin: 0 0 10px 0;
        color: var(--text-title);
        font-size: 1.15rem;
    }
    .chapter1-suno .hl-yellow {
        background-image: linear-gradient(transparent 55%, var(--highlight-yellow) 55%);
        color: inherit;
        font-weight: 800;
        padding: 0 2px;
        border-radius: 2px;
    }
    .chapter1-suno .text-hl {
        color: var(--accent-primary);
        font-weight: 800;
    }
    .chapter1-suno .text-purple {
        color: var(--accent-purple);
        font-weight: 800;
    }
    @media (max-width: 768px) {
        .chapter1-suno .theory-grid { grid-template-columns: 1fr; }
        .chapter1-suno .must-learn-layout { grid-template-columns: 1fr; }
        .chapter1-suno .must-learn-grid { grid-template-columns: 1fr; }
        .chapter1-suno .music-match-card { flex-direction: column; }
        .chapter1-suno .music-left, .chapter1-suno .music-right { width: 100%; }
        .chapter1-suno .music-left { border-right: none; border-bottom: 1px solid var(--border-color); }
        .chapter1-suno .workflow-container { flex-direction: column; align-items: stretch; }
        .chapter1-suno .arrow { display: none; }
        .chapter1-suno .step-box { display: flex; align-items: center; text-align: left; gap: 15px; background: #f8fafc; padding: 10px; border-radius: 8px; }
        .chapter1-suno .step-num { margin-bottom: 0; }
    }
</style>

<div class="chapter1-suno">
<div class="container">
    <h1>🎵 AI 视频的灵魂注入：SUNO 音乐与剪辑法则</h1>

    <div class="alert-box">
        <div class="alert-title">你是不是总在最后一步才配音乐？</div>
        <p>很多小白做 AI 视频的流程是这样的：</p>
        <p style="color: #64748b; font-size: 0.95rem;">
            <em>写剧本 ➡️ Midjourney 生成 20 张图 ➡️ Runway 生成 20 段视频 ➡️ 扔进剪映拼起来 ➡️ <strong>最后一步：在曲库里随便找首 BGM 铺在底垫上。</strong></em>
        </p>
        <p><strong>结果呢？</strong><br>
        视频里的怪物在疯狂咆哮，背景音乐却在缓慢抒情；画面明明到了高潮，音乐却刚好结束了。<br>
        整个视频充满了<span class="text-hl">“画面和声音各玩各的”</span>的极度廉价感。</p>
        <p style="font-size: 1.1rem; color: #92400e; margin-top: 15px;">记住好莱坞大师乔治·卢卡斯的名言：<br><span class="hl-yellow">“声音，占据了电影 50% 的体验。”</span></p>
    </div>

    <h2>⏱️ 颠覆认知：AI 视频的“黄金制作顺序”</h2>
    <p>在专业的影视工业（特别是混剪、预告片、广告片）中，音乐绝对不是最后一步加的“调料”，而是<span class="text-purple">第一步定好的“尺子”！</span></p>
    <p>做 AI 视频，你必须习惯下面这个<strong>“BGM 先导”</strong>的黄金工作流：</p>

    <div class="workflow-container">
        <div class="step-box">
            <div class="step-num">1</div>
            <div class="step-title">脑暴脚本</div>
            <div class="step-desc">定主题与情绪</div>
        </div>
        <div class="arrow">➔</div>
        <div class="step-box active">
            <div class="step-num">2</div>
            <div class="step-title">SUNO 生音乐</div>
            <div class="step-desc" style="color: var(--accent-purple); font-weight: bold;">先定下节奏尺子！</div>
        </div>
        <div class="arrow">➔</div>
        <div class="step-box">
            <div class="step-num">3</div>
            <div class="step-title">AI 生图/视频</div>
            <div class="step-desc">根据音乐长度补画面</div>
        </div>
        <div class="arrow">➔</div>
        <div class="step-box">
            <div class="step-num">4</div>
            <div class="step-title">踩点剪辑</div>
            <div class="step-desc">声画同步合成</div>
        </div>
    </div>

    <div style="background: #fff; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px; margin-bottom: 50px;">
        <strong>💡 为什么音乐要放在第 2 步？（小白秒懂）：</strong><br><br>
        音乐就是一条<strong>“带有刻度的尺子”</strong>。<br>
        如果你先用 SUNO 生成了一首 30 秒、节奏激烈的赛博朋克电音，你听着鼓点就会知道：“哦，这里有 5 次重击，我需要生成 5 个快速切换的特写镜头！”<br><br>
        <span class="text-hl">先有音乐的节奏框架，再去决定生成什么画面</span>，你的视频才会有极其舒适的“呼吸感”！
    </div>

    <h2>🧠 WHY：音乐是如何操控观众潜意识的？</h2>
    <div class="theory-grid">
        <div class="theory-card">
            <h3>理论一：【节奏剪辑 / 踩点】</h3>
            <p><strong>音乐是画面的心跳</strong></p>
            <p style="color: #475569; font-size: 0.95rem;">
                在好莱坞，这叫“Mickey Mousing（米老鼠效应）”。<br>
                当视频中人物挥出一拳，或者画面从黑白瞬间变成彩色时，如果伴随着音乐里<span class="text-purple">“砰”的一声重鼓</span>，观众会产生极大的生理舒适感（爽感）。<br><br>
                音乐的节拍，决定了你画面切换（Cut）的速度。
            </p>
        </div>
        <div class="theory-card" style="border-top-color: #10b981;">
            <h3 style="border-bottom-color: #bbf7d0;">理论二：【声画对位理论】</h3>
            <p><strong>音乐告诉你“该怎么哭/怎么笑”</strong></p>
            <p style="color: #475569; font-size: 0.95rem;">
                画面给出的是客观事实，但音乐赋予的是<span class="text-purple">主观情绪</span>。<br>
                同一个“小丑在街头跳舞”的画面：<br>
                配上欢快的爵士乐，这是喜剧；<br>
                配上极其低沉、压抑的大提琴，这就是让人毛骨悚然的惊悚片。<br>
                <strong>音乐，是改变画面情绪的终极滤镜。</strong>
            </p>
        </div>
    </div>

    <div class="must-learn-wrap">
        <h3 class="must-learn-title">📚 课程必修资料（看视频！）</h3>
        <p class="must-learn-desc">建议先看完直播回放，再进入下方的 AI 音乐工具练习，学习效率会更高。</p>
        <div class="must-learn-layout">
            <div class="must-learn-intro">
                <p class="must-learn-intro-title">🔥 一节课带你彻底玩转 Suno</p>
                <p class="must-learn-intro-sub">掌握以下精髓，不懂乐器也能“言出法随”。</p>
                <div class="must-learn-intro-section">
                    <p class="must-learn-intro-h">🎵 三大维度重塑音乐认知：</p>
                    <ul class="must-learn-intro-list">
                        <li><strong>横向切片（配器）：</strong>讲透从摇滚四大件到管弦乐的编制，轻松拿捏原声与电声的质感。</li>
                        <li><strong>纵向切片（结构）：</strong>玩透 Intro、Verse、Chorus 等元标签（Meta-tags），精准控制歌曲高潮。</li>
                        <li><strong>情绪密码（BPM）：</strong>揭秘 BPM 与大小调的魔法，用速度和调性精准操控听众的荷尔蒙。</li>
                    </ul>
                </div>
                <div class="must-learn-intro-section">
                    <p class="must-learn-intro-h">💡 不可错过的实操黑科技：</p>
                    <ul class="must-learn-intro-list">
                        <li><strong>“灵魂六问”万能公式：</strong>独家拆解（人声+情绪+速度+风格+配器）的 Prompt 架构，告别盲目抽卡，一发入魂。</li>
                        <li><strong>影视级配乐实战：</strong>从“康熙怒斥群臣”到“华强买瓜”，手把手教你挖掘画面情绪，匹配绝佳电影感 BGM。</li>
                        <li><strong>Suno 隐藏玩法全解锁：</strong>哼歌成曲、人声/伴奏一键分轨、神级翻唱与跨界混搭（如侗族大歌秒变爵士）。</li>
                    </ul>
                </div>
                <p class="must-learn-intro-end">来，一起打通这些任督二脉 🚀</p>
            </div>
            <div class="must-learn-grid">
                <div class="must-learn-card">
                    <p class="must-learn-meta">👨🏻‍🏫 jiafeng高嘉丰</p>
                    <p class="must-learn-label">🎯 音乐教学1</p>
                    <div class="must-learn-row">
                        <span class="must-learn-hand">👉</span>
                        <a href="https://fclive.pandacollege.cn/p/jifzHD" target="_blank" rel="noopener" class="must-learn-btn">🎬 直播回放：音乐教学1</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tool-box">
        <p class="tool-title">🎵 AI音乐工具：</p>
        <p class="tool-item"><span class="tag-reco">推荐</span>风变的 SUNO，无需翻墙，直接使用：<a href="https://art.forchange.cn/suno" target="_blank" rel="noopener" class="tool-link">https://art.forchange.cn/suno</a></p>
        <p class="tool-item">国际版的 SUNO，需翻墙科学上网使用：<a href="https://suno.com/home" target="_blank" rel="noopener" class="tool-link">https://suno.com/home</a></p>
        <p class="tool-item tool-manual"><span class="manual-icon">🧭</span><span class="manual-highlight">>> SunoAI-宝藏提示词手册：<a href="https://sunoai-instrument.jfzero.top/" target="_blank" rel="noopener" class="tool-link">https://sunoai-instrument.jfzero.top/</a></span></p>
        <p class="tool-note">（菩萨老师给3个pdf文档，社团同学做成网站，供大家使用哦！）</p>
    </div>

    <h2>🎼 HOW：AI 画面与 SUNO 音乐的“神级搭配”</h2>
    <p style="margin-bottom: 30px;">在使用 SUNO 时，到底该输入什么 Prompt 才能匹配你的 AI 视频？<br>以下是 3 个经典场景的配方：</p>

    <div class="music-match-card">
        <div class="music-left">
            <h4 style="margin: 0 0 10px 0; color: var(--text-title); font-size: 1.15rem;">🌌 史诗科幻 / 巨物感</h4>
            <span class="suno-tag">[Epic Orchestral]</span>
            <span class="suno-tag">[Heavy Bass]</span>
            <span class="suno-tag">[Hans Zimmer style]</span>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 10px;">(史诗管弦乐 / 重低音 / 汉斯·季默风格)</p>
        </div>
        <div class="music-right">
            <p><strong>🎥 适配视频画面：</strong><br>极远景的浩瀚宇宙、废土上缓缓站立的机甲、缓慢拉出的（Zoom out）庞大城市群。</p>
            <p><strong>🎬 影史案例：</strong><br><span class="hl-yellow">《星际穿越》《沙丘》</span>。巨大的低频合成器声音，不仅能震动电影院的座椅，更能完美承托住画面中那种宏大、孤独和压迫感。</p>
        </div>
    </div>

    <div class="music-match-card">
        <div class="music-left">
            <h4 style="margin: 0 0 10px 0; color: var(--text-title); font-size: 1.15rem;">💧 情绪崩溃 / 极度悲伤</h4>
            <span class="suno-tag">[Melancholy Piano]</span>
            <span class="suno-tag">[Slow Strings]</span>
            <span class="suno-tag">[Ambient]</span>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 10px;">(忧郁钢琴 / 缓慢弦乐 / 氛围音乐)</p>
        </div>
        <div class="music-right">
            <p><strong>🎥 适配视频画面：</strong><br>静止机位的大特写、角色的眼泪、空无一人的房间中景（Medium shot）。</p>
            <p><strong>🎬 影史案例：</strong><br><span class="hl-yellow">《飞屋环游记》</span>开场 5 分钟的蒙太奇。全段没有一句台词，只有舒缓转为忧伤的钢琴曲，配合着老爷爷逐渐孤独的画面，直接让观众泪奔。</p>
        </div>
    </div>

    <div class="music-match-card">
        <div class="music-left">
            <h4 style="margin: 0 0 10px 0; color: var(--text-title); font-size: 1.15rem;">🏃‍♂️ 逃亡追逐 / 赛博都市</h4>
            <span class="suno-tag">[Cyberpunk Synthwave]</span>
            <span class="suno-tag">[Fast BPM]</span>
            <span class="suno-tag">[Heavy Beats]</span>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 10px;">(赛博朋克合成器波 / 快BPM / 重鼓点)</p>
        </div>
        <div class="music-right">
            <p><strong>🎥 适配视频画面：</strong><br>第一人称视角（POV）、剧烈晃动的跟随运镜（Tracking shot）、快速切换的局部特写。</p>
            <p><strong>🎬 影史案例：</strong><br><span class="hl-yellow">《极盗车神》(Baby Driver)</span>。男主开车逃亡时，每一次转弯、每一次换挡、甚至雨刷器的摆动，都完美卡在背景音乐的鼓点上，爽感爆棚！</p>
        </div>
    </div>

    <h2>✂️ 剪辑实操：如何把音乐和画面完美缝合？</h2>
    <p style="margin-bottom: 25px;">把 SUNO 音乐导入剪映（或 PR）后，请牢记这 3 个黄金剪辑法则：</p>

    <ul class="edit-tips">
        <li>
            <h4>1. 眼睛盯着“音频波形图”剪辑（踩点）</h4>
            <p style="color: #475569; font-size: 0.95rem; margin: 0;">不要纯凭感觉盲剪！展开底部的音频轨道，看到<span class="text-hl">波形图中突然突起的高峰（鼓点/重音）</span>，这就是你要切换画面（Cut）或者画面中发生爆炸/运镜突变的地方。踩准了波形，你的视频就有了灵魂。</p>
        </li>
        <li>
            <h4>2. 情绪的“铺垫与爆发”</h4>
            <p style="color: #475569; font-size: 0.95rem; margin: 0;">大部分 SUNO 生成的音乐都有一个规律：前 10 秒比较平缓，随后进入高潮。你的视频也必须这样排布：<br>
            <span class="hl-yellow">前 10 秒铺垫期：</span>放远景定场、缓慢推拉的中景；<br>
            <span class="hl-yellow">高潮爆发瞬间：</span>立刻切入极具视觉冲击力的“极特写”或“剧烈的快速运镜”！</p>
        </li>
        <li>
            <h4>3. “留白”与静音的核弹级威力</h4>
            <p style="color: #475569; font-size: 0.95rem; margin: 0;">新手最爱把整整 1 分钟的视频塞满震耳欲聋的音乐。其实，在最紧张的时刻（比如主角发现了惊天秘密的大特写），<span class="text-purple">突然把背景音乐掐断 1 秒钟（完全静音）</span>，这种“寂静的震耳欲聋”往往比任何声音都让人起鸡皮疙瘩。</p>
        </li>
    </ul>

    <div style="background-color: var(--text-title); color: #fff; padding: 25px 30px; border-radius: 12px; margin-top: 50px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
        <p style="margin: 0; font-size: 1.15rem; font-weight: 500; letter-spacing: 1px;">
            <span style="color: var(--accent-purple); font-weight: 900;">💡 导师最后一句话：</span><br><br>
            做 AI 视频，不要当个单纯的“凑图机器”。<br>
            <span style="font-size: 1.25rem; font-weight: 900; margin-top: 15px; display: inline-block;">
                先用 SUNO 铺好情感的轨道，再用绝美的画面填满它。<br>听懂了音乐在说什么，你的视频才真正具备了“导演感”！
            </span>
        </p>
    </div>
</div>
</div>
    `,toolComparison:{title:`MJ 和即梦有什么区别？`,moveToTaskStep:3,compareRows:[{dimension:`风格美学`,mj:`更容易做出电影海报感、艺术化、强风格画面，视觉冲击力更强。`,jimeng:`更偏叙事清晰与写实稳定，中文语义理解直观，表达更稳。`},{dimension:`图片质感`,mj:`光影层次、材质细节、氛围张力通常更惊艳，适合做“炸点镜头”。`,jimeng:`人物一致性、场景可控性、批量出图稳定性更友好。`},{dimension:`应用场景`,mj:`封面图、概念设定图、关键帧、风格探索与视觉拔高。`,jimeng:`课程作业、短视频分镜、连续四图讲故事、快速迭代。`}],recommendations:[`新手建议：先用即梦建立“故事表达 + 稳定出图”能力，再逐步用MJ训练风格和高级质感。`,`高手建议：即梦负责叙事一致性，MJ负责关键镜头风格拔高与精修，两者混用效率最高。`]},objectives:[`学会AI绘画基础操作`,`生成4张图片，用来讲一个很小的小故事`,`理解景别变化创造节奏`],resources:[{type:`required`,badge:`必修`,title:`《如何用四个镜头，讲好一个故事》`,link:`https://fclive.pandacollege.cn/p/2wrYTR`,linkText:`📺 直播回放`,items:[`建议先看回放，再结合下面PDF逐页梳理四镜头结构。`,`如果回放链接异常，可先阅读PDF讲义。`],pdfUrl:`https://res.pandateacher.com/CXVSEPCG1777257677544.pdf`},{type:`required`,badge:`必学`,title:`MJ出图课程`,description:`掌握MJ出图的基础流程与使用技巧`,links:[{url:`https://fc0.cc/320e1t/1HB5Q`,label:`📹 视频教程`},{url:`https://xueshanlinghu.github.io/MJPromptGenerator/`,label:`🛠️ MJ提示词生成器`},{url:`https://art.forchange.cn/mj`,label:`🎨 打开风变MJ开始创作`}],moveToTaskStep:3,half:!0},{type:`required`,badge:`必学`,title:`即梦AI出图完整教程`,description:`掌握即梦AI的出图、编辑、参考功能`,links:[{url:`https://fc0.cc/320e1t/1GZmM`,label:`📹 视频教程`},{url:`https://bytedance.larkoffice.com/docx/EkCsd3iGvoxUnExu0Q8ccGt3n6c`,label:`📖 即梦提示词手册`},{url:`https://jimeng.jianying.com/`,label:`🎬 打开即梦开始创作`}],moveToTaskStep:3,half:!0}],practiceTasks:[{step:1,title:`构思你的故事`,description:`先定一个小小的微型故事，再用“起承转合”折成4幕`,exampleLabel:`故事示例`,scriptExample:{core:`【示例】小女孩发现猫咪走失后焦急寻找，最终在雨夜巷口寻回并带回家中温暖相拥。`,scenes:[{title:`图一 | ① 交代人物与环境`,content:`小女孩看着空空如也的猫窝，神情茫然失措。`},{title:`图二 | ② 行动推进`,content:`黄昏时分，她拿着手绘的寻猫启事，在街头焦急地四处寻觅。`},{title:`图三 | ③ 冲突或转折`,content:`大雨滂沱的黑夜，她终于在暗巷的角落里，找到了瑟瑟发抖的小橘猫。`},{title:`图四 | ④ 结果或情绪收尾`,content:`回到温暖的家中，一人一猫裹着干毛巾，安心地紧紧相拥。`}]},tips:[`四图结构建议：<strong>①交代人物与环境</strong> <strong>②行动推进</strong> <strong>③冲突或转折</strong> <strong>④结果或情绪收尾</strong>。`,`如果你不能用一句话讲清故事，说明题材太大，继续缩小。`],quiz:{question:`你觉得，这四个图的文字，可以直接用来给AI生成图片了吗？`,options:[`可以`,`不可以`],correctAnswer:`不可以`,explanation:`
            <p><strong>可以用来出图，AI绝对能给你画出东西来。但是，大概率会“翻车”，得不到你想要的连续感和高级电影感。</strong></p>
            
            <h4>🎨 核心原因：AI是一个“没有想象力、极度理性的直男画师”</h4>
            <p>如果你只给它一句剧本：“小女孩看着空空如也的猫窝，神情茫然失措。”这个“直男画师”大脑里会立刻冒出无数个问号，陷入死机状态：</p>
            <p><strong>画风问题：</strong> “老板，你是要油画、水彩、迪士尼3D动画，还是真人拍的照片？” <span class="quiz-emphasis">（如果不说，AI就会瞎猜，第一张给你搞个二次元，第二张给你搞个水墨画，四张图完全不连戏。）</span></p>
            <p><strong>主角细节：</strong> “小女孩是几岁？是中国人还是欧洲人？穿的什么衣服？头发多长？” <span class="quiz-emphasis">（如果不说，第一张图女孩是金发，第二张图女孩可能就变黑发了。）</span></p>
            <p><strong>光影氛围：</strong> “屋子里是白天还是晚上？是很亮的白炽灯，还是有点忧郁的黄昏阳光？” <span class="quiz-emphasis">（光影决定了图的“高级感”，剧本里没写，AI就会给一个最平庸、像超市日光灯一样的光线。）</span></p>
            <p><strong>镜头位置：</strong> “我是该画女孩的脸部特写（看表情），还是画整个房间（看环境）？”</p>

            <hr class="quiz-divider">
            <h4>🔍 剧本文字 VS AI提示词 的区别</h4>
            <p>简单来说：</p>
            <p><strong>剧本文字（你刚才那四句话）：</strong>是给人看的。人脑有脑补能力，看到“空猫窝、茫然失措”，人脑会自动浮现出一个凄凉的画面。</p>
            <p><strong>AI提示词（我之前给你写的英文）：</strong>是给机器看的。必须像一份<strong>“极其详细的现场施工图纸”</strong>。</p>
            
            <p>✅ <strong>真正能出好图的 AI 提示词（全方位控制）：</strong></p>
            <p>【画风设定】 The film still of（电影剧照风格）<br>
            【主体细节】 a 7-year-old little girl（一个7岁的小女孩），holding an empty cat collar（手里拿着空猫项圈）<br>
            【环境动作】 standing in her living room, staring sadly at an empty fluffy cat bed（站在客厅，伤心地盯着毛茸茸的空猫窝）<br>
            【光影氛围】 Warm but melancholic afternoon sunlight（温暖但忧郁的午后阳光）<br>
            【镜头参数】 shot on 35mm lens, photorealistic（35毫米镜头拍摄，照片级真实）</p>

            <h4>💡 总结</h4>
            <p>刚才那四段话，叫<strong>“故事大纲”</strong>，它非常棒，帮你理清了你要讲什么故事。<br><br>但前面为你写的那一长串英文，叫<strong>“咒语/提示词”</strong>，它是把你脑子里的这个故事，翻译成机器能听懂的“光、影、构图、色彩”指令，这样生出来的图才会有大片感！</p>
          `}},{step:2,title:`写出4个图片的提示词`,description:`用“小女孩找回走失小猫”做四图示例：同一角色、同一画风、四个镜头讲完整故事。`,example:`四图叙事：放学回家发现小猫不见 → 在小巷四处寻找 → 雨夜巷口终于找到 → 抱着小猫回到温暖的家。`,exampleGuideIntro:`尝试写出你自己设计的4图故事的具体图片提示词，至少是能包含`,exampleGuideList:[`画面风格：用 the film still of 电影静帧的风格`,`画面景别/视角/镜头：远景、中景、特写、过肩拍、仰拍视角、俯拍....`,`画面具体内容`],exampleLabel:`4图故事示例`,aiAssist:{url:`https://ai-edu.aigcfun.com/chat-tool/chat`,btnText:`打开风变AI对话工具，建议用【高级推理模型】，或【编程模型】`,prompt:`我要用midjourney出四张图，做一个小女孩找回走失小猫的小视频。
开场发现小猫不见 → 线索追寻 → 在雨夜巷口找到 → 抱着小猫回家。
你帮我设计四张图的图片提示词，用上the film still of`,result:[{title:`画面一：开场（发现不见）`,desc:`剧情/镜头：交代故事起因。小女孩拿着一个空的猫项圈，看着空荡荡的猫窝，神情失落。空气中弥漫着安静且悬疑的氛围。`,prompt:`The film still of a 7-year-old little girl standing in her living room, holding an empty cat collar in her small hands. She is staring sadly at an empty fluffy cat bed on the floor. Warm but melancholic afternoon sunlight streaming through the window, revealing dust motes in the quiet air. Cinematic lighting, shot on 35mm lens, photorealistic, subtle emotional expression. --ar 16:9 --style raw --v 6.0`,translation:`中文释义：电影剧照，一个7岁的小女孩站在客厅里，小手里拿着一个空的猫项圈。她正伤心地盯着地板上一个毛茸茸的空猫窝。温暖却略带忧郁的午后阳光透过窗户照射进来，照亮了安静空气中的灰尘。电影级光影，35mm镜头拍摄，照片级写实，细腻的情感表达。`},{title:`画面二：线索追寻（黄昏寻觅）`,desc:`剧情/镜头：小女孩走到户外，手里拿着自己用蜡笔画的“寻猫启事”，在街头焦急地四处张望。天色渐暗，预示着寻找的困难。`,prompt:`The film still of a worried 7-year-old little girl standing on a dim suburban street at dusk, holding a handmade "Missing Cat" flyer with a child's crayon drawing of an orange cat. She is looking around anxiously. Blue hour lighting, streetlights just beginning to flicker on in the background, cool cinematic color grading, shallow depth of field, realistic textures. --ar 16:9 --style raw --v 6.0`,translation:`中文释义：电影剧照，黄昏时分，一个焦急的7岁小女孩站在昏暗的郊区街道上，手里拿着一张手工制作的“寻猫启事”（上面有儿童蜡笔画的橘猫）。她正焦急地四处张望。蓝调时刻的光线，背景里的路灯刚刚开始闪烁亮起，冷色调电影级调色，浅景深，真实的质感。`},{title:`画面三：高潮（雨夜巷口找到）`,desc:`剧情/镜头：情绪爆发点。大雨滂沱的黑夜，小女孩穿着黄色雨衣蹲在积水的巷口，向躲在纸箱里发抖的小橘猫伸出手。`,prompt:`The film still of a little girl wearing a bright yellow raincoat, crouching in a dark, wet alleyway during heavy rain at night. She is gently reaching out her hand to a tiny, shivering orange tabby kitten hiding inside a soggy cardboard box. Dramatic cinematic backlighting from a distant street lamp, heavy raindrops catching the light, reflections on the wet asphalt, highly emotional, Arri Alexa 65. --ar 16:9 --style raw --v 6.0`,translation:`中文释义：电影剧照，夜里下着大雨，一个小女孩穿着明黄色的雨衣，蹲在黑暗潮湿的小巷里。她正温柔地向躲在湿透纸箱里、瑟瑟发抖的小橘猫伸出手。远处路灯投下充满戏剧性的电影级逆光，大雨滴折射着光芒，潮湿柏油路面的倒影，极具情感张力，Arri Alexa 65 摄影机。`},{title:`画面四：结局（抱着小猫回家）`,desc:`剧情/镜头：温暖的结局。回到家中，小女孩和小猫都用毛巾包裹着，紧紧依偎在一起，背景是窗外的冷雨，与室内的暖光形成极致对比。`,prompt:`The film still of a happy and relieved little girl sitting on a cozy rug inside a warm room, tightly hugging a small orange tabby kitten wrapped in a dry fluffy towel. Both have their eyes closed in comfort. Warm amber tungsten light from a nearby lamp illuminating their faces, contrasting with the cold, dark, rainy night visible through the window behind them. Intimate close-up, soft cinematic focus, heartwarming masterpiece. --ar 16:9 --style raw --v 6.0`,translation:`中文释义：电影剧照，一个开心且如释重负的小女孩坐在温暖房间舒适的地毯上，紧紧抱着一只裹在干燥蓬松毛巾里的小橘猫。他们都舒服地闭上了眼睛。旁边台灯发出温暖的琥珀色钨丝灯光照亮了他们的脸庞，与背后窗外寒冷、黑暗的雨夜形成对比。亲密的特写镜头，柔和的电影级焦点，温暖人心的杰作。`}]}},{step:3,title:`开始生成图片`,description:`打开AI工具，生成你的4张故事图。也可以直接使用公开课的作业。`}],chapterTask:{description:`我已学会生成4张故事图`,tips:`确保4张图片风格统一、故事连贯`}},{id:`chapter2`,number:2,title:`图生视频：让图片动起来`,icon:`🎬`,objectives:[`使用AI工具将图片转化为视频片段`,`理解图生视频的基本原理`,`掌握首尾帧的应用`],resources:[{type:`important`,badge:`必学`,title:`即梦-图生视频：教学基础1`,description:`学习如何使用即梦将图片转化为视频，并快速写出基础动效提示词`,videoUrl:`https://res.pandateacher.com/9W8SHHZI1777028981575.mp4`,items:[`运镜移动示例：镜头缓慢向前推进，轻微右移，保持主体居中，电影感稳定运镜。`,`物品动作示例：女孩抬头眨眼，头发被微风轻轻吹动，树叶缓慢飘落，远处路灯轻微闪烁。`,`组合示例：镜头缓慢推近，人物转身看向镜头，衣角随风摆动，背景云层缓慢流动。`]},{type:`optional`,badge:`了解`,title:`即梦/可灵首尾帧：教学基础2`,description:`（不一定要用，但需要知道什么是首尾帧）`,descriptionHighlight:`首尾帧，就是用两张图，生成一段图1到图2的自然过渡视频`,videoUrl:`https://res.pandateacher.com/MRVBQS1T1777030217557.mp4`}],practiceTasks:[{step:1,title:`准备你的4张图片`,description:`确保第1步生成的4张图片故事连贯、风格统一`,example:`检查角色造型是否一致、场景风格是否统一、画面质量是否清晰`,exampleImages:[`https://res.pandateacher.com/Q21RUF511777028941059.png`,`https://res.pandateacher.com/N5RD74OE1777028941134.png`,`https://res.pandateacher.com/WY6EH3VS1777028940802.png`,`https://res.pandateacher.com/5XJN4YU41777028940778.png`]},{step:2,title:`选择AI视频工具`,description:`推荐使用即梦或可灵，将4张图片分别生成视频片段`,tools:[{name:`即梦`,url:`https://jimeng.jianying.com/`,desc:`操作简单，效果稳定`},{name:`可灵`,url:`https://app.klingai.com/cn/`,desc:`功能强大，效果多样`}]},{step:3,title:`生成4个视频片段`,description:`将每张图片转化为5-10秒的视频片段`,exampleVideos:[`https://res.pandateacher.com/IIQHP8KD1777106481515.mp4`,`https://res.pandateacher.com/J4AH2ZPX1777106481516.mp4`,`https://res.pandateacher.com/ESD6FKR61777106481516.mp4`,`https://res.pandateacher.com/B3A7VC8Q1777106481516.mp4`],actionText:`继续生成视频`}],chapterTask:{description:`我已成功生成4个视频片段`,tips:`视频片段流畅，无明显卡顿`}},{id:`chapter3`,number:3,title:`视频剪辑：加上音乐和音效`,icon:`✂️`,objectives:[`使用剪映完成最终作品`,`学会基础的视频剪辑操作`,`掌握节奏把控技巧`],resources:[{type:`required`,badge:`必学`,title:`剪映基础剪辑教程`,description:`学习剪映的基本操作和剪辑技巧`,duration:`20分钟`,link:`https://fclive.pandacollege.cn/p/1WE4uE`,linkText:`▶️ 观看直播回放`},{type:`important`,badge:`工具`,title:`剪映下载`,description:`专业级视频剪辑工具，免费易用`,links:[{url:`https://www.capcut.cn/`,label:`📥 下载剪映`}]}],practiceTasks:[{step:1,title:`安装并打开剪映`,description:`下载并安装剪映，创建新项目`,actionLink:`https://www.capcut.cn/`,actionText:`📥 下载剪映`},{step:2,title:`导入视频素材`,description:`将第2步生成的4个视频片段按故事线顺序拖入时间线`,example:`确保视频顺序符合你的故事逻辑：开头 → 发展 → 高潮 → 结尾`},{step:3,title:`添加背景音乐`,description:`从剪映音乐库选择合适的背景音乐，或者使用SUNO生成原创音乐`,tips:[`选择与故事氛围匹配的音乐`,`注意音乐的节奏，在节奏点上切换画面`,`可以使用SUNO生成原创音乐（第2周会详细讲解）`]},{step:4,title:`调整视频节奏`,description:`对视频素材进行【变速】或【裁剪】处理，让视频素材能够卡在背景音乐的节奏点上`,example:`在鼓点处切换画面，在高潮处使用特写镜头`},{step:5,title:`添加音效`,description:`最后添加一些【转场音效】或是【环境音效】，让视频更丰富`,example:`添加脚步声、环境音、转场音效等`},{step:6,title:`导出并分享`,description:`导出你的视频作品，发到【野菩萨入门基础学习群】里`,actionText:`🎉 完成作品`}],assignments:[{id:`assignment1`,title:`基础作业1：短视频作品`,status:`你的第一个AI视频作品`,required:!0,requirements:[`出4张图讲述一个故事或剧情`,`生成 4 个片段视频`,`最终剪辑出1个带背景音乐+音效的短视频`],submitSteps:[{step:1,instruction:`在入门群里发`,hashtag:`#基础作业1`},{step:2,instruction:`填写提交表单`,url:`https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf`,btnText:`📝 点击提交作业`}],tips:`对视频剪辑审美要求不高，确保会按基础剪辑步骤完成简单剪辑`}],chapterTask:{description:`我已完成第一个AI视频作品`,tips:`最终视频时长5-20秒，卡在音乐节奏点上`}},{id:`chapter4`,number:4,title:`第1课：零基础变身AI大导的“降维打击”指南`,icon:`📸`,customHtml:`
<div class="container">
    <h1>🎬 风变野菩萨AI视频社团</h1>

    <div class="warning-box">
        <div class="title">⚠️ 警告：在此之前，你可能一直在“假装”做 AI 视频</div>
        <p>嗨，未来的 AI 大导演，欢迎来到风变野菩萨！👋</p>
        <p>问你个非常真实的问题：你是不是经常在 AI 输入框里敲下几百个字的“小作文”，满心欢喜地按下回车……结果，AI 却甩给你一张 <span class="hl-red">一眼假的“塑料感网图”</span>，或者 <span class="hl-red">构图极其呆板的“大头贴”</span>？</p>
        <p>真相是：你一直在用“画画”的思维要求 AI，但顶级 AI 创作者，都在用 <span class="hl-yellow">“导演”的思维操控 AI</span>。不懂 AI 摄影，你生成的视频永远只是动起来的 PPT。</p>
        <p>今天，我们将直接把圈内顶级大神的 <strong>核心“5个视觉暗码”</strong> 交给你。准备好享受这种“降维打击”的爽感了吗？</p>
    </div>

    <div class="secret-box" style="background: rgba(79, 70, 229, 0.05); border: 1px dashed var(--primary);">
        <h3 style="margin-top: 0; color: var(--primary);">📚 课前必修资料：</h3>
        <p style="font-weight: bold; margin-bottom: 5px;">1. 摄影课基础：掌握AI绘画的核心提示词技巧，这是一切创作的基础</p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0;">（有AI作图基础的同学，可快速复习一遍）</p>
        <div style="display: flex; align-items: center; margin-top: 10px; gap: 10px;">
            <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
            <a href="https://fc0.cc/320e1t/1FxR8" target="_blank" class="pulse-btn" style="display: inline-block; background: var(--primary); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">🎬 视频回放：摄影基础1，摄影师的前四招</a>
        </div>
    </div>

    <h2>🤯 认知颠覆：不要“命令”AI，要学会“贿赂”它！</h2>
    <div class="secret-box">
        <p>很多小白觉得，AI 是个听话的仆从。<strong>大错特错！</strong>AI 其实是一个天赋异禀但非常有主见（甚至有点瞎）的疯子。</p>
        <p style="font-size: 1.1rem;"><strong>🔑 核心内幕：提示词不是命令，而是 <span class="hl-yellow">“权重（筹码）”</span>！</strong></p>
        <p>在 AI 的天平上，你想让“全身照”赢，就必须加上足够的筹码。老手是怎么“贿赂” AI 的？</p>
        <div class="code-block">
            // 🤫 老手暗语：<br>
            full body shot (全身照) + standing on road (站在路上) + wearing shoes (穿着鞋子)
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">（AI 心想：连鞋子和马路都要画出来？行吧，那老老实实画全身吧！）</p>
    </div>

    <h2>🪄 偷师好莱坞：让画面瞬间“变贵”的 5 个作弊码</h2>
    <p>为什么别人的画面充满电影感，你的却像劣质网游？因为你没有开启下面这 5 个隐藏开关。</p>

    <h3>🔘 开关 1：操控观众眼球的“虚化滤镜”</h3>
    <p>一张图如果没有重点，就会显得极度廉价。</p>
    <p>想让你的画面瞬间变高级？记住这三个字母：<span class="magic-word">DOF</span> (景深)。</p>
    <p>加上它，AI 就会自动把背景模糊，把所有光芒聚拢在主角身上。</p>
    <p>🌟 <strong>进阶暗语</strong>：<span class="magic-word">bokeh</span> (梦幻光斑)。夜景绝配，氛围感直接封神！</p>

    <h3>🔘 开关 2：摆脱呆板视角的“空间魔法” <span class="badge">🔥小白必学</span></h3>
    <ul>
        <li><strong>想表现压迫感/史诗感？</strong> <span class="magic-word">high angle shot</span> (上帝俯视) + <span class="magic-word">panorama</span> (全景)</li>
        <li><strong>想拍出神仙颜值的网感头像？</strong> <span class="magic-word">makeup shot</span> (美妆特写)，AI 会把睫毛、高光画得极其精致！</li>
        <li><strong>想讲一个有悬念的故事？</strong> <span class="magic-word">back shot</span> (背影照)，电影感直接拉满。</li>
    </ul>

    <h3>🔘 开关 3：掌控时间的“时空遥控器”</h3>
    <ul>
        <li><strong>震撼瞬间：</strong> <span class="magic-word">bullet time</span> (子弹时间)，水滴悬停，时间凝固。</li>
        <li><strong>时光飞逝：</strong> <span class="magic-word">long exposure</span> (长曝光)，车流变成光轨。</li>
    </ul>

    <h3>🔘 开关 4：注入灵魂的“光影调色盘” <span class="badge">最值钱一招</span></h3>
    <ul>
        <li><strong>万能神药：</strong> <span class="magic-word">cinematic lighting</span> (电影光)，怎么用都不出错。</li>
        <li><strong>古典名画感：</strong> <span class="magic-word">Rembrandt lighting</span> (伦勃朗光)。打出立体倒三角高光，像卢浮宫油画般高级！</li>
        <li><strong>赛博未来风：</strong> <span class="magic-word">neon lighting</span> (霓虹光)，红蓝紫交织的质感拉满。</li>
    </ul>

    <div class="recap-box">
        <strong style="color: #334155; font-size: 1.1rem;">⏱️ 1分钟补课：前四招快速回顾</strong>
        <p style="margin-bottom: 0; padding-left: 8px;">
            <strong>① 镜头远近</strong> (广角/特写) 控制压迫感；<br>
            <strong>② 景深焦点</strong> (DOF) 控制观众注意力；<br>
            <strong>③ 视角机位</strong> (俯视/仰视) 控制权力关系；<br>
            <strong>④ 快门速度</strong> (冻结/长曝光) 控制时间观感。
        </p>
    </div>

    <div class="secret-box" style="background-color: #fffbeb;">
        <h3 style="margin-top: 0; color: #b45309;">🔘 隐藏开关 5：干掉“AI塑料感”的复古滤镜 🤫</h3>
        <p>小白画图最大的痛点：<strong>画面太光滑、人物像抹了猪油</strong>。顶级大神的秘密武器，是给画面故意加上一点“不完美”。</p>
        <p>🌟 <strong>去油腻神咒</strong>：在提示词最后加上 <span class="magic-word" style="background:#fef3c7; border-color:#fcd34d; color:#d97706;">film grain</span> (胶片颗粒) 或指定相机 <span class="magic-word" style="background:#fef3c7; border-color:#fcd34d; color:#d97706;">Kodak 400</span>。画面瞬间褪去廉价感，变成王家卫电影里的复古胶片！</p>
    </div>

    <h2>🧛‍♂️ 降维打击：一键“合法剽窃”大师灵魂</h2>
    <p>觉得自己搭配太麻烦？教你一招最“无赖”也最爽的捷径：直接“召唤”大师替你干活！</p>
    <p>在提示词最前面，加上魔法咒语：<span class="magic-word">photography by [摄影师名字]</span></p>
    <ul>
        <li>想生成登杂志封面的 <strong>超模大片</strong>？👉 召唤时尚鬼才：<span class="hl-yellow">by Nick Knight</span></li>
        <li>想生成引发巨物恐惧的 <strong>史诗大景</strong>？👉 召唤宏大之王：<span class="hl-yellow">by Andreas Gursky</span></li>
    </ul>
    <p style="color: var(--text-muted); font-size: 0.95rem;">（这就相当于你花了 0 元，请到了身价千万的世界级摄影大咖，为你按快门！）</p>

    <hr>

    <h2>🚀 见证奇迹：30秒抄作业，今晚出大片！</h2>

    <h3>🍿 作业 1：用midjourney出一张，这个<strong>手视角</strong>的图</h3>
    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        <a href="https://art.forchange.cn/mj" target="_blank" class="pulse-btn" style="display: inline-flex; align-items: center; justify-content: center; width: 210px; height: 44px; box-sizing: border-box; background: var(--primary); color: white; padding: 0 16px; border-radius: 8px; text-decoration: none; font-weight: bold;">打开风变mj创作</a>
        <span style="font-size: 1.2rem; color: var(--primary); font-weight: 900;">→</span>
        <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" class="pulse-btn" style="display: inline-flex; align-items: center; justify-content: center; width: 210px; height: 44px; box-sizing: border-box; background: #10b981; color: white; padding: 0 16px; border-radius: 8px; text-decoration: none; font-weight: bold;">📝 提交作业</a>
    </div>
    <div style="margin: 15px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <img src="/homework_hand.png" alt="手视角作业参考图" style="width: 100%; display: block;">
    </div>
</div>
    `,ctaModalHtml:`
    <div class="cta-box" style="padding: 0; background: transparent; box-shadow: none; position: relative;">
        <div style="position: absolute; top: -12px; left: -12px; background: #ef4444; color: white; font-weight: 900; font-size: 1.1rem; padding: 4px 12px; transform: rotate(-15deg); border-radius: 6px; box-shadow: 2px 4px 10px rgba(239, 68, 68, 0.4); z-index: 100;">彩蛋！！！</div>
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%); padding: 30px; text-align: center; border-radius: 14px 14px 0 0; position: relative; z-index: 1;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🎁</div>
            <h3 style="margin: 0; color: white; font-size: 1.6rem; font-weight: 900; letter-spacing: 1px;">真正的魔法才刚刚开始</h3>
        </div>
        
        <div style="padding: 35px 40px; background: white; border-radius: 0 0 14px 14px; text-align: center;">
            <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 25px 0;">今天教你的，仅仅是 AI 摄影世界的冰山一角。真实的顶级玩家手里，捏着一份能应对所有场景的 <strong style="color: #0f172a;">“密码本”</strong>。</p>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <p style="margin: 0 0 10px 0; font-size: 1.1rem; color: #334155; font-weight: bold;">野菩萨教研团队独家整理：</p>
                <p style="margin: 0 0 20px 0; font-size: 1.3rem; color: #059669; font-weight: 900;">《摄影提示词结构范式》</p>
                <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
                    <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
                    <a href="https://docs.qq.com/sheet/DSXRNUGJIQ0tMWkhu?tab=BB08J2" target="_blank" class="super-pulse-btn" style="display: inline-block; padding: 12px 35px; border-radius: 50px; text-decoration: none; font-weight: 900; font-size: 1.2rem;">立即查看机密范式</a>
                </div>
            </div>

            <p style="margin: 0; color: #94a3b8; font-size: 0.95rem; font-weight: 500;">今晚尽情去抽卡试错吧！明天，我们教你如何让绝美画面“动”起来！</p>
        </div>
    </div>
    `,bonusDocument:{title:`《摄影提示词结构范式》`,description:`野菩萨教研团队独家整理的 AI 摄影提示词密码本`,url:`https://docs.qq.com/sheet/DSXRNUGJIQ0tMWkhu?tab=BB08J2`},objectives:[`理解"提示词是权重而非命令"的核心逻辑`,`掌握控制时间观感、注意力焦点、镜头关系的技巧`,`使用光线营造不同氛围`,`能独立创作出构图合理、质感高级的AI摄影作品`],resources:[{type:`required`,badge:`第1课`,title:`🎬摄影基础1：0622 摄影课提示词教学：摄影师的前四招`,description:`🎬摄影基础1：0622 摄影课提示词教学：摄影师的前四招`,links:[{url:`https://fc0.cc/320e1t/1FxR8`,label:`📺 观看第1课视频：摄影师的前四招`}]},{type:`important`,badge:`警告`,title:`⚠️ 在此之前，你可能一直在“假装”做AI视频`,description:`嗨，未来的 AI 大导演，欢迎来到风变野菩萨！👋`,items:[`你是不是经常在 AI 输入框里敲下几百个字的“小作文”，把画面细节描述得清清楚楚，满心欢喜地按下回车……结果，AI 却甩给你一张一眼假的“塑料感网图”，或者构图极其呆板的“大头贴”？`,`你可能会怀疑：是不是我用的工具不行？是不是我没有艺术细胞？都不是。`,`真相是：你一直在用“画画”的思维要求 AI，但顶级 AI 创作者，都在用“导演”的思维操控 AI。`,`所有的 AI 视频，都是由一帧帧静止的画面组成的。不懂 AI 摄影，你生成的视频就永远只是动起来的 PPT。`]},{type:`important`,badge:`颠覆`,title:`第一课认知颠覆：不要命令AI，要学会“贿赂”它`,description:`提示词不是命令，而是权重（筹码）。`,items:[`很多小白觉得，AI 是个听话的仆从，我说什么它就画什么。大错特错！`,`AI 其实是一个天赋异禀但非常有主见（甚至有点瞎）的疯子。`,`你命令它：“给我拍一张美女的全身照，她有迷人的大眼睛。”AI 听到“大眼睛”兴奋了，为了把眼睛画清楚，它会把镜头无限拉近——恭喜你，全身照变成了一张怼脸大头贴。`,`🔑 核心内幕：提示词不是命令，而是“权重（筹码）”！`,"🤫 老手暗语：`full body shot` (全身照) + `standing on road` (站在路上) + `wearing shoes` (穿着鞋子)"]},{type:`important`,badge:`作弊码`,title:`第二课偷师好莱坞：5个让画面变贵的开关`,description:`为什么别人电影感拉满，你像劣质网游？因为没开这5个开关。`,items:["🔘 开关 1：操控观众眼球的“虚化滤镜” -> `DOF`（景深）","🌟 进阶暗语：`bokeh` (梦幻光斑)","🔘 开关 2：摆脱呆板视角的“空间魔法” -> `high angle shot` + `panorama` / `makeup shot` / `back shot`","🔘 开关 3：掌控时间的“时空遥控器” -> `bullet time` / `long exposure`","🔘 开关 4：注入灵魂的“光影调色盘” -> `cinematic lighting` / `Rembrandt lighting` / `neon lighting`","🔘 开关 5：干掉“AI塑料感”的复古滤镜 -> `film grain` / `Kodak 400`"]},{type:`important`,badge:`大师`,title:`第三课降维打击：一键“召唤”摄影大师`,description:"魔法句式：`photography by [摄影师名字]`",items:["想生成一张能登上《VOGUE》杂志封面的超模大片？👉 召唤时尚界鬼才：`by Nick Knight`","想生成一张让人巨物恐惧发作的史诗级大景？👉 召唤宏大场景之王：`by Andreas Gursky`"]},{type:`important`,badge:`抄作业`,title:`30秒成片：今晚就能出大片`,description:`万能大导公式：大师 + 镜头 + 光影 + 主体场景 + 胶片滤镜`,items:[`📝 万能大导公式：[召唤大师] + [镜头距离/视角] + [光影开关/虚化开关] + [你要的主体与环境] + [胶片滤镜]`,"🍿 今晚作业 1：`photography by Nick Knight` + `makeup shot, DOF` + `neon lighting, bokeh` + `a beautiful cyberpunk girl in Tokyo night street` + `film grain`","🦖 今晚作业 2：`photography by Andreas Gursky` + `extremely long shot, high angle shot` + `cinematic lighting, film still` + `Godzilla destroying a flaming city, massive smoke` + `Kodak 400`"]},{type:`important`,badge:`FAQ`,title:`新手避坑（最常翻车的两个问题）`,description:`这两条记住，能帮你省掉大量错误试错。`,items:["🙋‍♂️ 问：为什么我写了全景和特写，AI 出来的图怪怪的？答：因为你让 AI 精神分裂了！`close up shot` 和 `panorama` 是冲突词。",`🙋‍♀️ 问：提示词是不是写得越长、像写作文一样越好？答：错！AI 喜欢“标签词”，不喜欢“小作文”。词数控制在 50 个单词以内，精简干脆。`]},{type:`important`,badge:`范式`,title:`终极彩蛋 + 内部机密词典`,description:`🤫 专属福利发放：我们的教研团队，将行业内最顶尖的提示词，整理成了一份《风变野菩萨·AI导演内部机密词典》。`,items:[`👇 如何获取？今晚完成上述任意一个“抄作业”打卡，将你生成的绝美图片发到专属社群，并 @ 班主任。即可免费领取这份高清版【机密词典】原图！`,`今晚，尽情去抽卡、去试错！明天，带着你最骄傲的一张神级照片，我们进入下一课：让你的绝美画面，变成有灵魂的爆款视频！`]},{type:`important`,badge:`资料`,title:`【提示词】摄影范式：摄影提示词结构范式`,description:`此资料用于本课提示词结构搭建与复盘。`,links:[{url:`https://docs.qq.com/sheet/DSXRNUGJIQ0tMWkhu?tab=BB08J2`,label:`🧩 打开摄影范式表`}]},{type:`tool`,badge:`工具`,title:`风变 Midjourney 工具`,description:`用于作业2出图，可直接进行提示词创作、describe 与 shorten。`,links:[{url:`https://art.forchange.cn/mj`,label:`🚀 打开风变MJ工具`}]}],practiceTasks:[{step:1,title:`先看完开营首播主课视频`,description:`先完整观看第1课视频，再进入下方实操任务。`,lessons:[`重点看懂：提示词是权重，不是命令`,`重点看懂：5个开关分别解决什么问题`,`重点看懂：同类词叠加，相反概念二选一`]},{step:2,title:`先做“认知颠覆笔记”`,description:`把“提示词是权重，不是命令”用你自己的话写成3句，并给出1个冲突词例子。`,tasks:[`必须写出：为什么AI会把全身照画成大头贴`,`必须写出：你准备如何给目标效果加“筹码”`,`必须写出：一个冲突词对（例如 close up vs panorama）`]},{step:3,title:`今晚抄作业二选一（必须出图）`,description:`作业1赛博人像 / 作业2哥斯拉海报，至少完成1个。`,tips:[`赛博人像关键词：DOF + bokeh + neon lighting + film grain`,`哥斯拉海报关键词：extremely long shot + high angle + film still + Kodak 400`,`别改太多，先原样跑一版，再做小幅迭代`]},{step:4,title:`提交打卡，领取机密词典`,description:`把你最满意的一张图发到群里并@班主任，领取内部机密词典。`,actionLinks:[{url:`https://art.forchange.cn/mj`,text:`🚀 打开风变MJ开始创作`}]}],chapterTask:{description:`我已完成第1课打卡并提交一张“降维打击”级作品`,tips:`进入下一章，学习如何让“绝美画面”变成“有灵魂的组图表达”`}},{id:`chapter5`,number:5,title:`第2课：摄影艺术进阶（后三招）`,icon:`🎞`,customHtml:`
<div class="container chapter5-custom">
    <h1>🎨 风变野菩萨AI视频社团</h1>

    <div class="warning-box">
        <div class="title">⚠️ 你是否陷入了“AI生成瓶颈”？</div>
        <p>如果你学过一段时间的 AI 绘画，你一定遇到过这些崩溃瞬间：</p>
        <ul>
            <li>❌ “生成的图片都很漂亮，但感觉 <span class="hl-red">没有灵魂、看完就忘</span>”</li>
            <li>❌ “想讲个完整的故事，但 <span class="hl-red">单张图根本表达不出来</span>”</li>
            <li>❌ “作品千篇一律，<span class="hl-red">没有自己的艺术风格</span>”</li>
        </ul>
        <p><strong>这节课，就是来帮你打破这个瓶颈的！</strong><br>我们将交给你 <span class="hl-yellow">艺术创作的后3招心法</span>，让你从“会按生成键的机器”，进化成“有自己思想的 AI 艺术家”。</p>
    </div>

    <div class="secret-box" style="background: rgba(79, 70, 229, 0.05); border: 1px dashed var(--primary);">
        <h3 style="margin-top: 0; color: var(--primary);">📚 课前必修资料：</h3>
        <p style="font-weight: bold; margin-bottom: 5px;">1. 摄影课基础：掌握AI绘画的核心提示词技巧，这是一切创作的基础</p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0;">（有AI作图基础的同学，可快速复习一遍）</p>
        <div style="display: flex; align-items: center; margin-top: 10px; gap: 10px;">
            <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
            <a href="https://fc0.cc/320e1t/1G1hw" target="_blank" class="pulse-btn" style="display: inline-block; background: var(--primary); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">🎬摄影基础2：0625 摄影课提示词教学：摄影师的后三招</a>
        </div>
    </div>

    <h2>🎭 第5招：内容与风格（赋予作品辨识度）</h2>
    <p>同样是拍一个女孩在森林里，不学风格的人生成的图平平无奇；<br>而大神会加上风格作弊码，让画面瞬间充满故事感。<strong>不是拍什么，而是“怎么拍”。</strong></p>

    <div class="secret-box">
        <table>
            <tr>
                <th>想要的感觉</th>
                <th>召唤哪位艺术家？</th>
                <th>魔法暗语 (Prompt)</th>
            </tr>
            <tr>
                <td>戏剧感、像电影剧照</td>
                <td>Gregory Crewdson</td>
                <td><span class="magic-word">Gregory Crewdson style, cinematic tableau</span></td>
            </tr>
            <tr>
                <td>中国乡土、大场景小人物</td>
                <td>张克纯 (Zhang Kechun)</td>
                <td><span class="magic-word">Zhang Kechun style, Chinese rural</span></td>
            </tr>
            <tr>
                <td>时尚、前卫、杂志风</td>
                <td>Nick Knight</td>
                <td><span class="magic-word">Nick Knight style, avant-garde fashion</span></td>
            </tr>
        </table>
        <p style="margin-top: 15px; color: #b45309; font-weight: bold;">💡 核心思路：不要只用 beautiful（漂亮），要用具体的艺术家名字来锚定情绪！</p>
    </div>

    <h2>🧩 第6招：图像之间的关系（用组图讲故事） <span class="badge">最实用一招</span></h2>
    <p>单看一张图 = “哦，一张照片”；<br>把几张图排在一起 = <span class="hl-yellow">“哇，原来想表达这个深刻的意思！”</span> 这就是蒙太奇的魔力。</p>

    <h3>方法：对比与并列（强烈情绪）</h3>
    <p>比如主题是<strong>《残酷的对比》</strong>：图1是富人的奢华派对，图2是穷人的街头乞讨。把它们拼在一起，不用一句文案，震撼力就出来了。</p>

    <h3>方法：递进关系四宫格（讲连贯故事）</h3>

    <div class="story-grid text-only-grid">
        <div class="story-item">
            <div class="story-label">1. 平平无奇：小孩拿书</div>
        </div>
        <div class="story-item">
            <div class="story-label">2. 悬念：眼神特写，隐约发光</div>
        </div>
        <div class="story-item">
            <div class="story-label">3. 递进：进入书中的奇幻世界</div>
        </div>
        <div class="story-item">
            <div class="story-label">4. 高潮：完全沉浸，现实消失</div>
        </div>
    </div>
    <div class="img-caption">💡 用4张图产生1+1>2的化学反应</div>

    <h2>新手四图避坑指南</h2>
    <ul class="pitfall-list">
        <li>
            <span class="wrong">❌ 错误：每张图都用不同的风格和色调，看起来像四个人拼凑的。</span>
            <span class="right">✅ 正确：固定艺术风格参数，统一色调（比如都加上 “film noir” 或同一位艺术家的名字）。</span>
        </li>
        <li>
            <span class="wrong">❌ 错误：故事太深奥，没有文字说明根本没人看得懂。</span>
            <span class="right">✅ 正确：好的作品不需要解释。先从简单的对比做起，比如“富与穷”、“自然与污染”。</span>
        </li>
        <li>
            <span class="wrong">❌ 错误：先随便生成4张图，再试图硬编一个故事把它们串起来。</span>
            <span class="right">✅ 正确：<span class="hl-yellow">先想主题，设计好分镜，然后再去写提示词生成！</span></span>
        </li>
    </ul>

    <h2>🛸 第7招：摄影之外的艺术（打破常规）</h2>
    <p>谁说摄影只能老老实实拍照？AI 时代，你可以玩得更野：</p>
    <ul>
        <li><strong>X光视角：</strong> <span class="magic-word">x-ray photography</span> (适合科幻、赛博朋克)</li>
        <li><strong>行为艺术：</strong> 让 AI 生成几千个人摆成特定图案，这就是数字行为艺术。</li>
        <li><strong>设备模拟：</strong> <span class="magic-word">lomography, leak light</span> (模拟复古漏光相机)</li>
        <li><strong>文字结合：</strong> 在生成的图片上大字排版，变成强有力的艺术宣言。</li>
    </ul>

    <hr>

    <div class="cta-box">
        <h3 style="margin-top: 0; color: #b45309; justify-content: center; font-size: 1.6rem; font-weight: 900;">🏆 本次任务：生成双重曝光艺术图</h3>
        <p style="color: #475569; font-size: 1.1rem;">真正的艺术，是有话要说。今天，你不再是个画图匠，而是参展的艺术家。</p>

        <div class="cta-action">
            <p style="margin: 0; color: #b45309; font-weight: 900; font-size: 1.1rem;">参考图如下（换别的画面，实现双重曝光）</p>
            <div style="margin-top: 12px; text-align: center;">
                <img src="/homework2/Snipaste_2026-04-19_17-05-56.png" alt="双重曝光作业示例" style="width: 100%; max-width: 780px; border-radius: 10px; display: block; margin: 0 auto;">
            </div>
        </div>

    </div>
</div>
    `,objectives:[`理解“内容-形式-风格”三位一体的创作思路`,`学会用组图关系（并列/递进/对比）讲清一个主题`,`完成作业2两张目标图：手视角 + 双重曝光`],resources:[{type:`required`,badge:`第2课`,title:`摄影艺术进阶：摄影师的后三招`,description:`这一课会把你从“会生成图片”，推进到“会设计一组有表达力的作品”。`,items:[`核心升级：从“画面好看”升级到“画面有观点”`,`重点模块：内容与风格 / 图像关系 / 摄影之外的艺术`,`建议学习顺序：看视频 → 看案例 → 做作业2实战`],links:[{url:`https://fc0.cc/320e1t/1G1hw`,label:`📺 观看第2课视频：摄影师的后三招`}]},{type:`important`,badge:`案例`,title:`小白可直接套用的组图叙事框架`,description:`先把故事结构搭好，再写提示词，效率会高很多。`,items:[`四图常见结构：起（交代）→ 承（推进）→ 转（冲突）→ 合（收束）`,`每一图都要有“新增信息”，避免四图只是同一画面换姿势`,`优先确保“角色一致 + 风格一致 + 光线逻辑一致”`]},{type:`important`,badge:`范式`,title:`提示词结构范式（第2课继续使用）`,description:`用同一套结构写两种风格：手视角 / 双重曝光。`,links:[{url:`https://docs.qq.com/sheet/DSXRNUGJIQ0tMWkhu?tab=BB08J2`,label:`🧩 打开摄影范式表`}]},{type:`tool`,badge:`工具`,title:`风变 Midjourney 工具`,description:`用于第2课实战出图。`,links:[{url:`https://art.forchange.cn/mj`,label:`🚀 进入风变MJ开始出图`}]}],practiceTasks:[{step:1,title:`先完成第2课学习与案例拆解`,description:`从课中任选1个案例，写下“主题、形式、内容”三点拆解。`,lessons:[`主题：它在讨论什么问题（情绪、议题、观点）`,`形式：它用了什么结构（并列、递进、对比、呼应）`,`内容：它通过哪些画面元素完成表达`]},{step:2,title:`完成作业2：手视角出图`,description:`重点控制第一人称视角、前景手部、主体临场感。`,exampleLabel:`手视角目标示例`,example:`小技巧：先锁定镜头角度，再去调风格词和氛围词，稳定性更高。`,exampleImages:[`/homework2/hand-perspective-reference.png`]},{step:3,title:`完成作业2：双重曝光出图`,description:`重点控制“轮廓主体 + 内部场景叠加 + 光影层次”。`,exampleLabel:`双重曝光目标示例`,example:`小技巧：主体轮廓尽量简洁，内部叠加场景要有明确主次。`,exampleImages:[`/homework2/double-exposure-reference.png`]},{step:4,title:`挑选最终提交版本`,description:`每个方向各选1张最佳图，检查清晰度、构图和风格一致性。`,tips:[`手视角：看手部是否自然、透视是否合理`,`双重曝光：看主体轮廓是否清晰、叠加是否干净`]}],ctaModalHtml:`
      <div class="cta-box" style="padding: 0; background: transparent; box-shadow: none; position: relative;">
        <div style="position: absolute; top: -12px; left: -12px; background: #ef4444; color: white; font-weight: 900; font-size: 1.05rem; padding: 4px 12px; transform: rotate(-15deg); border-radius: 6px; box-shadow: 2px 4px 10px rgba(239, 68, 68, 0.4); z-index: 100;">彩蛋！！！</div>
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 30px; text-align: center; border-radius: 14px 14px 0 0;">
          <div style="font-size: 3rem; margin-bottom: 10px;">🎉</div>
          <h3 style="margin: 0; color: white; font-size: 1.55rem; font-weight: 900; letter-spacing: 1px;">第一周彩蛋已解锁</h3>
        </div>
        <div style="padding: 34px 38px; background: white; border-radius: 0 0 14px 14px; text-align: center;">
          <p style="color: #334155; font-size: 1.15rem; line-height: 1.75; margin: 0 0 18px 0; font-weight: 800;">
            恭喜你完成第一周的入门基础！
          </p>
          <p style="color: #475569; font-size: 1.06rem; line-height: 1.75; margin: 0 0 20px 0;">
            接下来，我将给你赠送 <strong style="color: #0f172a;">50 次风变的 AI 音乐工具：Suno</strong>，<br>
            以便你能更好地尝试练习 AI 音乐哦！
          </p>
          <div style="background: #fff7ed; border: 1px dashed #fdba74; border-radius: 10px; padding: 14px 16px; color: #9a3412; font-size: 0.95rem;">
            继续保持学习节奏，后续内容会更好玩！
          </div>
        </div>
      </div>
    `,chapterTask:{description:`我已完成第2课学习并产出作业2两张目标图`,tips:`下一章完成群内 + 表单双提交，形成学习闭环`}},{id:`chapter6`,number:0,title:`前置：认识景别和运镜`,icon:`🎬`,customHtml:`
<style>
    .chapter6-custom {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: #f7f9fc;
        color: #333333;
        line-height: 1.8;
        margin: 0;
        padding: 20px;
    }
    .chapter6-custom .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }
    .chapter6-custom h1 {
        color: #1a1a1a;
        font-size: 28px;
        text-align: center;
        margin-bottom: 30px;
        line-height: 1.4;
    }
    .chapter6-custom h2 {
        color: #2c3e50;
        font-size: 22px;
        margin-top: 40px;
        padding-bottom: 10px;
        border-bottom: 2px solid #eef2f5;
    }
    .chapter6-custom p {
        font-size: 16px;
        margin-bottom: 15px;
    }
    .chapter6-custom ul {
        background-color: #f8fbff;
        padding: 20px 20px 20px 40px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    .chapter6-custom li {
        margin-bottom: 10px;
        font-size: 16px;
    }
    .chapter6-custom .highlight {
        color: #e74c3c;
        font-weight: bold;
    }
    .chapter6-custom .keyword {
        background-color: #ffeaa7;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: bold;
        color: #d35400;
    }
    .chapter6-custom .hl-slant {
        position: relative;
        display: inline-block;
        font-weight: bold;
        z-index: 0;
    }
    .chapter6-custom .hl-slant::before {
        content: '';
        position: absolute;
        left: -3px;
        right: -3px;
        bottom: 2px;
        height: 52%;
        background: rgba(255, 234, 167, 0.7);
        transform: skewX(-12deg);
        border-radius: 3px;
        z-index: -1;
    }
    .chapter6-custom .hl-underline {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #f1c40f;
        text-underline-offset: 2px;
        background-image: linear-gradient(transparent 58%, rgba(255, 234, 167, 0.7) 58%);
        padding: 0 2px;
    }
    .chapter6-custom .summary-box {
        background-color: #eafaf1;
        border-left: 5px solid #2ecc71;
        padding: 15px 20px;
        margin: 25px 0;
        border-radius: 0 8px 8px 0;
        font-size: 16px;
    }
    .chapter6-custom .cta-box {
        text-align: center;
        background: linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%);
        color: #111111;
        padding: 30px;
        border-radius: 12px;
        margin-top: 40px;
    }
    .chapter6-custom .cta-box p {
        font-size: 18px;
        margin: 0 0 10px 0;
        color: #111111;
    }
    .chapter6-custom .cta-box strong {
        font-size: 22px;
        color: #111111;
    }
</style>

<div class="chapter6-custom">
<div class="container">
    <h1>🎬 为什么你的AI视频像“动态PPT”？<br>掌握这两个词，一秒拉满电影质感！</h1>

    <p>闭上眼睛回想一下，你在做AI视频时，是不是经常遇到这样的<strong>“翻车现场”</strong>：</p>
    <p>用了最新最贵的AI视频工具，写了上百字的精美提示词（Prompt），满心欢喜地点击生成，结果出来的画面却是——</p>

    <ul>
        <li>人物像个木桩一样站在画面中间，只会眨眼和张嘴……</li>
        <li>风景图倒是会动了，但也就是像幻灯片一样生硬地平移……</li>
        <li>无论怎么抽卡，视频永远带着一股挥之不去的<span class="highlight">“AI塑料味”</span>和<span class="highlight">“网感廉价风”</span>。</li>
    </ul>

    <p class="highlight" style="font-size: 18px; text-align: center; margin: 30px 0;">到底哪里出了问题？</p>

    <p>其实，你和那些能在小红书、B站上获赞百万的AI视频大神之间，差的根本不是AI工具，而是——<strong>导演思维！</strong></p>
    <p>在影视工业中，哪怕是讲同一个故事，<strong>“怎么拍”永远比“拍什么”更重要。</strong></p>
    <p>而在AI视频创作中，决定“怎么拍”的核心魔法，就是我们要揭秘的两个顶级密码：<span class="keyword">【景别】</span>与<span class="keyword">【运镜】</span>。</p>

    <h2>🔍 第一重魔法：什么是【景别】？<br><span style="font-size: 18px; color: #7f8c8d;">——控制观众的“心理距离”</span></h2>
    <p>简单来说，<br><br><strong class="hl-slant">景别就是“你想让观众站多远看这个故事”。</strong></p>
    <p>对于AI来说，如果你只输入“一个哭泣的女孩”，AI是懵的，它只能随便给你一张大头照。</p>
    <p>但如果你懂景别，你就能<span class="hl-slant">操控观众的情绪</span>：</p>

    <ul>
        <li><strong>【远景】（Long Shot）：</strong>画面是一望无际的荒野，女孩只是角落里一个小小的黑点。<span class="hl-underline">观众感受到的是孤独、绝望和世界的宏大。</span></li>
        <li><strong>【中景】（Medium Shot）：</strong>镜头拉近，能看到女孩半身和她手里紧紧攥着的信。<span class="hl-underline">观众开始像旁观者一样，理解她正在经历什么。</span></li>
        <li><strong>【大特写】（Extreme Close-up）：</strong>镜头直接怼到女孩的眼睛上，清晰地看到一滴眼泪砸在睫毛上。这一瞬间，张力拉满，<span class="hl-underline">观众的心脏会被强烈的悲伤瞬间击中！</span></li>
    </ul>

    <div class="summary-box">
        <strong>🎯 为什么要学它？</strong><br>
        不懂景别，你的视频就是没有重点的流水账；<br>
        懂了景别，你就能在AI提示词里发号施令，让AI乖乖按照你的意图，<strong>去强调细节、去烘托情绪！</strong>
    </div>

    <h2>🎥 第二重魔法：什么是【运镜】？<br><span style="font-size: 18px; color: #7f8c8d;">——赋予画面的“呼吸与心跳”</span></h2>
    <br>
    <p>如果说景别是静态的距离，那<strong class="hl-slant">运镜就是“带着观众的眼睛一起运动”</strong>。</p>
    <p>为什么看好莱坞大片我们会觉得惊心动魄？<br>因为摄影机在“跑”、在“飞”、在“呼吸”。<br>在AI视频里加上运镜指令，你的画面才会瞬间“活”过来。</p>

    <ul>
        <li><strong>【推镜头】（Push in）：</strong>镜头缓缓向人物逼近。就像你在专注地盯着某人，<em>悬念感和紧张感瞬间拉满</em>。</li>
        <li><strong>【拉镜头】（Pull out）：</strong>镜头慢慢后退，视野变宽。像是在无声地叹息，常常用来<em>表现角色的无力感或故事的落幕</em>。</li>
        <li><strong>【手持跟随】（Handheld tracking）：</strong>镜头像人手拿着一样微微晃动，跟着角色奔跑。观众会有极强的<em>“晕眩感”和“临场感”</em>，仿佛自己也在逃命！</li>
    </ul>

    <div class="summary-box">
        <strong>🎯 为什么要学它？</strong><br>
        AI默认的运动方式往往是傻瓜式的“平移”。<br>
        只有当你输入了精准的运镜指令，画面才会有<span class="hl-slant">极强的呼吸感与节奏感</span>，彻底告别“动态PPT”的尴尬！
    </div>

    <h2>🚀 从“打字员”到“AI大导演”的蜕变</h2>
    <p>不会景别和运镜，你只是一个碰运气的<strong>“AI盲盒玩家”</strong>，做出的视频全凭AI的心情。<br>掌握了景别和运镜，你就拿起了摄影机，成为了真正掌控全局的<strong>“AI视频导演”</strong>！</p>
    <p>在接下来的课程中，我们将带你彻底拆解影视界沉淀百年的<strong>“镜头语言”</strong>，并手把手教你如何将这些专业术语，转化为<strong>AI听得懂的神级Prompt（提示词）</strong>。</p>

    <div class="cta-box">
        <p>准备好打破那层“AI塑料感”了吗？</p>
        <strong>欢迎来到真正的“AI光影魔法课”，我们开机！🎬</strong>
    </div>
</div>
</div>
    `,objectives:[`理解景别如何控制叙事信息密度和情绪距离`,`掌握常见运镜词并在提示词中准确调用`,`把“景别 + 运镜”组合成可复用的镜头语言模板`],chapterTask:{description:`我已经准备好学习景别和运镜了`}},{id:`chapter8`,number:1,title:`第1课：景别出图的情绪配方`,icon:`🎬`,customHtml:`
<style>
    :root {
        --bg-base: #f8fafc;
        --bg-card: #ffffff;
        --bg-notes: #f1f5f9;
        --text-main: #334155;
        --text-title: #0f172a;
        --accent-primary: #4f46e5;
        --accent-cyan: #0284c7;
        --accent-gold: #d97706;
        --accent-red: #dc2626;
        --border-color: #e2e8f0;
        --highlight-yellow: rgba(253, 224, 71, 0.7);
    }

    .week3-lesson1 {
        font-family: 'Noto Sans SC', -apple-system, sans-serif;
        background-color: var(--bg-base);
        color: var(--text-main);
        line-height: 1.8;
        margin: 0;
        padding: 40px 15px;
        font-size: 16px;
    }

    .week3-lesson1 .container {
        max-width: 860px;
        margin: 0 auto;
    }

    .week3-lesson1 h1 {
        font-size: 2.3rem;
        line-height: 1.4;
        text-align: center;
        background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 15px;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .week3-lesson1 .main-subtitle {
        text-align: center;
        color: #64748b;
        font-size: 1.15rem;
        margin-bottom: 50px;
        font-weight: 500;
    }

    .week3-lesson1 h2 {
        font-size: 1.7rem;
        color: var(--text-title);
        margin-top: 60px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 12px;
    }

    .week3-lesson1 h3 {
        font-size: 1.25rem;
        color: var(--text-title);
        margin-top: 0;
        margin-bottom: 15px;
        font-weight: 800;
    }

    .week3-lesson1 .quote-box {
        background-color: var(--bg-card);
        border-left: 5px solid var(--accent-primary);
        padding: 25px 30px;
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--text-title);
        border-radius: 8px;
        margin-bottom: 50px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        font-style: italic;
        line-height: 1.6;
    }
    .week3-lesson1 .hl-slant {
        position: relative;
        display: inline-block;
        font-weight: 800;
        z-index: 0;
    }
    .week3-lesson1 .hl-slant::before {
        content: '';
        position: absolute;
        left: -3px;
        right: -3px;
        bottom: 2px;
        height: 52%;
        background: rgba(253, 224, 71, 0.72);
        transform: skewX(-12deg);
        border-radius: 3px;
        z-index: -1;
    }

    .week3-lesson1 .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 60px;
    }
    .week3-lesson1 .pain-box {
        background: #fef2f2;
        border: 1px solid #fecaca;
        padding: 25px;
        border-radius: 12px;
    }
    .week3-lesson1 .value-box {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        padding: 25px;
        border-radius: 12px;
    }
    .week3-lesson1 .box-title {
        font-size: 1.2rem;
        font-weight: 800;
        margin-bottom: 15px;
    }

    .week3-lesson1 .module-card {
        background-color: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 30px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .week3-lesson1 .module-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
        border-color: #cbd5e1;
    }

    .week3-lesson1 .module-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .week3-lesson1 .module-list li {
        margin-bottom: 15px;
        padding-left: 25px;
        position: relative;
    }
    .week3-lesson1 .module-list li::before {
        content: '▪';
        color: var(--accent-primary);
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        line-height: 1;
        top: 2px;
    }
    /* 💡 导演法则专属排版卡片 */
    .week3-lesson1 .rule-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-left: 4px solid var(--accent-cyan);
        border-radius: 8px;
        padding: 20px;
        margin-top: 15px;
        margin-bottom: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    }

    .week3-lesson1 .rule-box.alt {
        border-left-color: var(--accent-gold);
    }

    .week3-lesson1 .rule-title {
        font-weight: 900;
        color: var(--text-title);
        font-size: 1.15rem;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .week3-lesson1 .rule-translate {
        font-size: 0.85rem;
        color: #0284c7;
        background: #e0f2fe;
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 20px;
        font-weight: bold;
        margin-bottom: 12px;
        border: 1px solid #bae6fd;
    }

    .week3-lesson1 .rule-box.alt .rule-translate {
        color: #b45309;
        background: #fef3c7;
        border-color: #fde68a;
    }

    .week3-lesson1 .rule-text {
        font-size: 0.95rem;
        color: #475569;
        margin-bottom: 15px;
        line-height: 1.6;
    }

    .week3-lesson1 .rule-example {
        background: #ffffff;
        border: 1px dashed #cbd5e1;
        padding: 15px;
        border-radius: 8px;
        font-size: 0.95rem;
    }

    .week3-lesson1 .rule-example .bad {
        color: #b91c1c;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f1f5f9;
    }

    .week3-lesson1 .rule-example .good {
        color: #047857;
        font-weight: bold;
    }

    .week3-lesson1 .rule-example .good span {
        background: #d1fae5;
        padding: 2px 6px;
        border-radius: 4px;
        color: #065f46;
    }

    .week3-lesson1 .shot-example-card {
        margin-top: 18px;
        background: #ffffff;
        border: 1px solid #bfdbfe;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 24px rgba(37, 99, 235, 0.08);
    }

    .week3-lesson1 .shot-example-card img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        background: #e2e8f0;
    }

    .week3-lesson1 .shot-prompt-box,
    .week3-lesson1 .shot-analysis-box {
        padding: 16px 18px;
    }

    .week3-lesson1 .shot-prompt-box {
        background: #eff6ff;
        border-bottom: 1px solid #bfdbfe;
    }

    .week3-lesson1 .shot-prompt-box h4,
    .week3-lesson1 .shot-analysis-box h4 {
        margin: 0 0 8px 0;
        color: #1e3a8a;
        font-size: 1rem;
        font-weight: 900;
    }

    .week3-lesson1 .shot-prompt-box p {
        margin: 0;
        color: #334155;
        font-size: 0.95rem;
        line-height: 1.75;
    }

    .week3-lesson1 .shot-analysis-box ul {
        margin: 0;
        padding-left: 20px;
    }

    .week3-lesson1 .shot-analysis-box li {
        margin-bottom: 6px;
        color: #475569;
        font-size: 0.92rem;
        line-height: 1.65;
    }

    .week3-lesson1 .shot-analysis-box strong {
        color: #1d4ed8;
    }

    .week3-lesson1 .film-highlight {
        background-image: linear-gradient(transparent 50%, var(--highlight-yellow) 50%);
        color: var(--text-title);
        font-weight: 800;
        padding: 0 4px;
        border-radius: 2px;
    }

    .week3-lesson1 .prompt-tag {
        background-color: #f8fafc;
        color: var(--accent-cyan);
        font-family: 'Courier New', Courier, monospace;
        padding: 4px 10px;
        border-radius: 6px;
        border: 1px solid #cbd5e1;
        font-size: 0.9rem;
        font-weight: bold;
        white-space: nowrap;
        display: inline-block;
        margin: 3px 2px;
    }
    .week3-lesson1 .prompt-with-note {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        vertical-align: top;
        margin: 3px 2px;
    }
    .week3-lesson1 .prompt-with-note .prompt-tag {
        margin: 0;
    }
    .week3-lesson1 .prompt-note-zh {
        margin-top: 3px;
        font-size: 0.72rem;
        color: #94a3b8;
        line-height: 1.2;
        font-weight: 500;
    }
    .week3-lesson1 .prompt-tag.with-zh {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
    }
    .week3-lesson1 .prompt-tag.with-zh::after {
        content: attr(data-zh);
        font-size: 0.72rem;
        color: #94a3b8;
        line-height: 1.2;
        font-weight: 500;
    }

    .week3-lesson1 .recipe-card {
        background-color: var(--bg-card);
        border: 1px solid var(--border-color);
        border-top: 5px solid var(--accent-gold);
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 45px;
        position: relative;
        box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    }

    .week3-lesson1 .recipe-title {
        font-size: 1.3rem;
        color: var(--text-title);
        font-weight: 900;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
    }

    .week3-lesson1 .shot-list {
        margin-bottom: 30px;
    }
    .week3-lesson1 .shot-item {
        background: #f8fafc;
        border-left: 4px solid var(--accent-cyan);
        padding: 15px 20px;
        margin-bottom: 10px;
        border-radius: 0 8px 8px 0;
        color: var(--text-main);
        border-top: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .week3-lesson1 .director-notes {
        background-color: var(--bg-notes);
        border: 1px dashed #cbd5e1;
        border-radius: 12px;
        padding: 30px 30px 20px;
        position: relative;
        margin-top: 25px;
    }
    .week3-lesson1 .director-notes::before {
        content: '🧠 导演视听心理学拆解';
        display: inline-block;
        background: #1e293b;
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 800;
        padding: 6px 14px;
        border-radius: 20px;
        position: absolute;
        top: -14px;
        left: 20px;
        letter-spacing: 1px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .week3-lesson1 .director-notes p {
        margin: 0 0 15px 0;
        font-size: 0.95rem;
        color: #475569;
    }
    .week3-lesson1 .concept-hl {
        color: var(--text-title);
        font-weight: 800;
        border-bottom: 2px solid var(--accent-gold);
        padding-bottom: 1px;
    }
    .week3-lesson1 .hl-underline {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #f1c40f;
        text-underline-offset: 2px;
        background-image: linear-gradient(transparent 58%, rgba(255, 234, 167, 0.7) 58%);
        padding: 0 2px;
    }

    .week3-lesson1 .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--border-color), transparent);
        margin: 60px 0;
        border: none;
    }

    @media (max-width: 768px) {
        .week3-lesson1 .grid-2 { grid-template-columns: 1fr; }
        .week3-lesson1 h1 { font-size: 1.8rem; }
        .week3-lesson1 .module-card, .week3-lesson1 .recipe-card { padding: 20px; }
        .week3-lesson1 .director-notes { padding: 30px 20px 20px; }
    }
</style>

<div class="week3-lesson1">
<div class="container">
    <h1>🎬 为什么你的AI视频像“动态PPT”？——学习『景别』吧！</h1>
    <div class="main-subtitle">掌握“镜头语法”，从盲盒玩家蜕变成 AI 大导演</div>

    <div class="quote-box">
        “在 AI 视频里，不懂景别，你只是个碰运气的盲盒玩家；懂了景别和组合，你才是<span class="hl-slant">操控观众心跳的上帝</span>。<br>”
    </div>

    <div class="grid-2">
        <div class="pain-box">
            <div class="box-title" style="color: var(--accent-red);">❌ 为什么总有“塑料网感”？</div>
            <p>很多小白做 AI 视频，无论文案多好，画面总是干瘪乏味。<br>因为通篇都在用 AI 默认的“平视中景”！</p>
            <p>人物永远站在画面正中间，背景换来换去，就像是在放幻灯片。<br>这种视频没有呼吸感、没有情绪起伏，观众看 3 秒就会划走。</p>
        </div>
        <div class="value-box">
            <div class="box-title" style="color: #059669;">✅ 镜头语法，是你的“作弊码”</div>
            <p><strong>1. 扬长避短</strong>：AI 难保肢体连贯？用大特写避开崩坏，只展现绝美眼神。<br>
            <strong>2. 零成本情绪放大</strong>：只需把机位改成“仰视”，反派瞬间压迫感拉满。<br>
            <strong>3. 建立叙事时空</strong>：<span class="hl-slant">远景定环境，中景定动作，特写定情绪。</span><br>视频才会有起承转合的电影感。</p>
        </div>
    </div>

    <div class="secret-box" style="background: rgba(79, 70, 229, 0.05); border: 1px dashed var(--accent-primary); margin: 10px 0 24px;">
        <h3 style="margin-top: 0; color: var(--accent-primary);">📚 课程必修资料：</h3>
        <p style="font-weight: bold; margin-bottom: 5px;">含基础：景别镜头</p>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 0;">🎯 观看直播回放：【视频拉片解说】（滋滋老师）</p>
        <div style="display: flex; align-items: center; margin-top: 10px; gap: 10px;">
            <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
            <a href="https://fclive.pandacollege.cn/p/rYNX8h" target="_blank" rel="noopener" class="pulse-btn" style="display: inline-block; background: var(--accent-primary); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">🎬 直播回放：视频拉片解说</a>
        </div>
    </div>

    <hr class="divider">

    <h2>五大常用的影视级景别组合：教你更好出图叙事表达</h2>

    <div class="module-card">
        <h3>🌌 模块一：【建立与宏观】—— 极远景 / 上帝视角</h3>
        <p style="margin-bottom: 15px;"><span class="prompt-tag with-zh" data-zh="天文摄影">Astrography</span> <span class="prompt-tag with-zh" data-zh="航拍视角">Aerial view</span> <span class="prompt-tag with-zh" data-zh="极远景">Extreme long shot</span> <span class="prompt-tag with-zh" data-zh="俯视视角">Top view</span></p>
        <ul class="module-list">
            <li><strong>💥 核心价值</strong>：AI 最擅长生成宏大的空镜，几乎不会崩坏。<br>这是你用来“拉高视频大片感”的最廉价、最稳妥的手段。<br>视觉心理学上，剥夺观众细节感知，强调“人类的渺小”与“命运的不可抗拒”。</li>
            <li><strong>🎬 殿堂级影史应用</strong>：<br>
                <span class="film-highlight">《指环王：王者无敌》</span>：烽火台点燃的经典段落，连续的<span class="hl-underline">极远景跨越雪山，史诗感与使命感瞬间拉满。</span><br>
                <span class="film-highlight">《敦刻尔克》</span>：诺兰使用<span class="hl-underline">上帝视角/俯瞰拍摄海滩上密密麻麻的士兵</span>。在浩瀚的海洋面前，生命显得极其脆弱。<br>
                <span class="film-highlight">《2001太空漫游》</span>：影史最伟大的天文摄影运用，巨大的黑色石碑漂浮在宇宙深处，直接触发人类对未知文明的敬畏。
            </li>
            <li><strong>🔗 AI 剪辑组合关系</strong>（新手必学的两条铁律）：
                
                <div class="rule-box">
                    <div class="rule-title">🗺️ 空间连续性法则</div>
                    <div class="rule-translate">👉 通俗翻译：先给观众看“全貌”，再给观众看“局部”</div>
                    <div class="rule-text">
                        不要一上来就放主角敲门的特写，观众会一头雾水：“这是哪儿？”。<br>要像写作文一样，先交代“地点”，再交代“人物”，观众的脑子才能跟上你的镜头。<br>
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>看晕观众：</strong>直接切入主角站在门前的中景。<br>（观众：发生甚么事了？）</div>
                        <div class="good">✅ <strong>正确定场：</strong>极远景 <span>(暴雪中的荒野古堡)</span> ➡️ 切入 ➡️ 中景 <span>(主角在古堡门前敲门)</span>。<br>秒懂！</div>
                        <div style="margin-top: 10px; color: #334155; font-weight: 400;">所以，你应该做的，就是先出2张图<br>1️⃣ 极远景，暴雪中的荒野古堡<br>2️⃣ 中景，主角在古堡门前敲门</div>
                        <div style="margin-top: 8px; font-size: 0.82rem; color: #94a3b8;">小字备注：每张图的提示词，还需要描写更细致一些，我只是给你举例...</div>
                    </div>
                </div>

                <div class="rule-box alt">
                    <div class="rule-title">🎢 极端对比法则</div>
                    <div class="rule-translate">👉 通俗翻译：把“最大”和“最小”直接撞在一起</div>
                    <div class="rule-text">
                        怎么瞬间把观众吓醒？不要慢吞吞地过渡！把宏大无比的场景和极其微小的局部生硬地“剪”在一起，制造视觉过山车，情绪瞬间就能引爆。<br>
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>平淡如水：</strong>宇宙远景 ➡️ 飞船中景 ➡️ 宇航员中景。<br>（像无聊的科教片）</div>
                        <div class="good">✅ <strong>引爆情绪：</strong>极远景 <span>(死寂浩瀚的宇宙)</span> ➡️ 啪！直接切入 ➡️ 极特写 <span>(宇航员惊恐睁大的眼睛)</span>。<br>震撼力拉满！</div>
                    </div>
                </div>

            </li>
        </ul>
    </div>

    <div class="module-card">
        <h3>👥 模块二：【叙事与客观】—— 中景 / 过肩镜头 / 侧面照</h3>
        <p style="margin-bottom: 15px;"><span class="prompt-tag with-zh" data-zh="中景">Medium shot</span> <span class="prompt-tag with-zh" data-zh="过肩镜头">Over shoulder shot</span> <span class="prompt-tag with-zh" data-zh="侧面镜头">Side shot</span> <span class="prompt-tag with-zh" data-zh="半身镜头">Half-body shot</span></p>
        <ul class="module-list">
            <li><strong>💥 核心价值</strong>：这是视频的“骨架”。如果全片都是特写观众会眼晕。中景提供了最接近人类社交距离的安全感。隐藏动机上：侧面照能表现“隐藏与秘密”；过肩镜头是建立“两人对话空间”的唯一法则。</li>
            <li><strong>🎬 殿堂级影史应用</strong>：<br>
                <span class="film-highlight">《黑客帝国》</span>：墨菲斯给尼奥递出红蓝药丸时，使用过肩镜头与中景来回切换，将“选择”的宿命感牢牢锁住。<br>
                <span class="film-highlight">《花样年华》</span>：王家卫极其偏爱侧面照和背影照。梁朝伟和张曼玉经常只有半张脸在光影中，诠释了东方爱情的克制与不可言说。
            </li>
            <li><strong>🔗 AI 剪辑组合关系</strong>（讲好故事的黄金套路）：
                
                <div class="rule-box" style="border-left-color: #3b82f6;">
                    <div class="rule-title">🗣️ 正反打对话法则</div>
                    <div class="rule-translate" style="color: #1d4ed8; background: #dbeafe; border-color: #bfdbfe;">👉 通俗翻译：“你看着我，我看着你”的乒乓球剪辑法</div>
                    <div class="rule-text">
                        <strong>科普时间：</strong><br>
                        什么是“过肩拍”？就是镜头放在A的肩膀后面，越过A去拍B的脸。<br>
                        什么是“正反打”？拍完A说话，镜头立刻转180度，拍B的反应，就像打乒乓球一样一来一回。<br><br>
                        <strong>为什么要这样？</strong>如果你只用两张单独的大头贴（单人中景）交替放，观众会觉得这是两个不在同一个空间里的人在自言自语。加入前景（别人的肩膀），才能死死锁住两人的空间关系。
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>各说各话：</strong>A的单人照 ➡️ B的单人照。（观众：这俩人是在发视频通话吗？）</div>
                        <div class="good" style="color: #1d4ed8;">✅ <strong>完美对话：</strong>过肩拍 <span>(越过A的肩膀，拍B听话的脸)</span> ➡️ 过肩拍 <span>(越过B的肩膀，拍A说话的脸)</span> ➡️ 中景 <span>(两人在同一画面里对峙)</span>。空间感立刻建立，火药味十足！</div>
                    </div>
                    <div class="shot-example-card">
                        <img src="https://res.pandateacher.com/W4IMDOWR1777259995618.png" alt="正反打过肩拍示例图">
                        <div class="shot-prompt-box">
                            <h4>过肩拍提示词示例</h4>
                            <p>过肩镜头，从一个穿深色夹克的男人背后拍摄。焦点对准一个神情疲惫、头发凌乱及肩的女人，她双手捧着热咖啡杯。深夜复古餐厅，温暖的钨丝灯光，背景是模糊的带雨滴的窗户，电影级调色，浅景深，细节丰富。</p>
                        </div>
                        <div class="shot-analysis-box">
                            <h4>核心提示词解析：</h4>
                            <ul>
                                <li><strong>Over-the-shoulder shot:</strong> 过肩拍（核心视角）。</li>
                                <li><strong>From behind [A]:</strong> 从A的背后/肩膀后方拍（构建前景）。</li>
                                <li><strong>Focus on [B]:</strong> 焦点对准B（清晰的主体）。</li>
                                <li><strong>Shallow depth of field:</strong> 浅景深（虚化前景的肩膀，突出对话感）。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="rule-box" style="border-left-color: #10b981;">
                    <div class="rule-title">🎭 悬念叠加法则</div>
                    <div class="rule-translate" style="color: #047857; background: #d1fae5; border-color: #a7f3d0;">👉 通俗翻译：就是不给你看正脸，让你自己猜他憋了什么坏水</div>
                    <div class="rule-text">
                        想表现一个好人即将黑化，或者角色做出了极其残忍的决定，千万不要拍他咬牙切齿的正脸！<br>
                        剥夺观众看到角色面部表情的权利。用背影和只能看到一半的侧脸，把角色的心理活动全部隐藏在阴影里。观众越是看不到，心里就越是发毛。
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>像演小品：</strong>镜头怼脸，主角对着镜头疯狂冷笑。（观众：有点油腻...）</div>
                        <div class="good" style="color: #047857;">✅ <strong>高级感拉满：</strong>背影照 <span>(主角沉默地走向漆黑的走廊深处)</span> ➡️ 切入 ➡️ 侧面照 <span>(主角的脸一半被惨白的月光照亮，另一半完全隐没在黑暗中)</span>。无需一句台词，观众秒懂：这人要大开杀戒了。</div>
                    </div>
                </div>

            </li>
        </ul>
    </div>

    <div class="module-card">
        <h3>👁️ 模块三：【心理手术刀】—— 特写 / 显微 / 局部</h3>
        <p style="margin-bottom: 15px;"><span class="prompt-tag with-zh" data-zh="特写">Close-up</span> <span class="prompt-tag with-zh" data-zh="极特写">Extreme close-up</span> <span class="prompt-tag with-zh" data-zh="显微摄影">Micro photography</span> <span class="prompt-tag with-zh" data-zh="手部特写">Hand shot</span></p>
        <ul class="module-list">
            <li><strong>💥 核心价值</strong>：<strong>AI视频的杀手锏。</strong>表达极致情绪时，全身动作易滑稽，而“滑落的泪珠”或“颤抖的手”胜过千言万语。强制共情，剥夺安全距离。</li>
            <li><strong>🎬 殿堂级影史应用</strong>：<br>
                <span class="film-highlight">《闪灵》</span>：杰克劈开门凑过去的那句"Here's Johnny!"，影史最恐怖的大特写，让观众直面纯粹的疯狂。<br>
                <span class="film-highlight">《梦之安魂曲》</span>：全片充斥着极特写——急剧缩放的瞳孔、沸腾的药液。具象化精神崩溃的过程。
            </li>
            <li><strong>🔗 AI 剪辑组合关系</strong>（操控心跳的两个秘诀）：
                
                <div class="rule-box" style="border-left-color: #ef4444;">
                    <div class="rule-title">⏱️ 情绪递进法则</div>
                    <div class="rule-translate" style="color: #b91c1c; background: #fee2e2; border-color: #fecaca;">👉 通俗翻译：镜头越推越近，观众越看越慌</div>
                    <div class="rule-text">
                        不要一直远距离看戏！当你想要表现紧张、压迫或者高潮时，让你的镜头像一把锥子一样，一点一点地“扎”进画面里。镜头离危险越近，观众的呼吸就会越局促。
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>毫无波澜：</strong>一直用中景拍主角在房间里看炸弹。（观众：哦，有个炸弹。）</div>
                        <div class="good" style="color: #b91c1c;">✅ <strong>让人窒息：</strong>中景 <span>(发现桌上有炸弹)</span> ➡️ 猛推至特写 <span>(主角瞬间惨白、冒汗的脸)</span> ➡️ 再切极特写 <span>(跳动到 00:01 的红字计时器)</span>。心跳漏跳一拍！</div>
                    </div>
                </div>

                <div class="rule-box" style="border-left-color: #8b5cf6;">
                    <div class="rule-title">🗡️ 局部隐喻法则</div>
                    <div class="rule-translate" style="color: #6d28d9; background: #ede9fe; border-color: #ddd6fe;">👉 通俗翻译：大画面装岁月静好，小特写搞暗流涌动</div>
                    <div class="rule-text">
                        最高级的讲故事方法，不是把所有信息都怼在观众脸上，而是只给他们看“冰山一角”。用一个极小的局部特写，去打破原本看似平静的大环境，制造出强烈的反差与悬念。
                    </div>
                    <div class="rule-example">
                        <div class="bad">❌ <strong>一眼看穿：</strong>全景拍一个坏人拿着刀在晚宴上走来走去。（观众：这也太直白了，像演小品。）</div>
                        <div class="good" style="color: #6d28d9;">✅ <strong>高级感拉满：</strong>全景 <span>(衣香鬓影、欢声笑语的豪华晚宴)</span> ➡️ 悄悄切入手部特写 <span>(长长的桌布下，一只戴着名表的手正死死握紧一把匕首)</span>。无需一句台词，杀机四伏！</div>
                    </div>
                </div>

            </li>
        </ul>
    </div>

    <div class="module-card">
        <h3>📐 模块四：【权力的阶梯】—— 仰视 / 俯视</h3>
        <p style="margin-bottom: 15px;"><span class="prompt-tag with-zh" data-zh="仰视镜头">Low angle shot</span> <span class="prompt-tag with-zh" data-zh="俯视镜头">High angle shot</span></p>
        <ul class="module-list">
            <li><strong>💥 核心价值</strong>：角度就是“阶级”！机位高度决定观众觉得“谁牛逼，谁弱小”。在提示词加入角度，能打破呆板平视，赋予强烈张力。</li>
            <li><strong>🎬 殿堂级影史应用</strong>：<br>
                <span class="film-highlight">《公民凯恩》</span>：大量使用极限仰视拍摄主角，哪怕是天花板的背景，都衬托出他膨胀的权力和傲慢。<br>
                <span class="film-highlight">《侏罗纪公园》</span>：第一次看霸王龙是震撼的仰视；霸王龙低头看小孩是绝望的俯视。食物链阶级显露无疑。
            </li>
            <li><strong>🔗 AI 剪辑组合关系</strong>：<br>
                <strong>【权力对抗剪辑】</strong>：仰视反派逼近 ➡️ 切入 ➡️ 俯视主角倒地仰望。力量悬殊的压迫感不靠特效就能出来！
            </li>
        </ul>
    </div>

    <div class="module-card">
        <h3>🌀 模块五：【现实的扭曲】—— 广角 / 鱼眼 / 第一人称</h3>
        <p style="margin-bottom: 15px;"><span class="prompt-tag with-zh" data-zh="广角">Wide angle</span> <span class="prompt-tag with-zh" data-zh="鱼眼镜头">Fish eye lens</span> <span class="prompt-tag with-zh" data-zh="第一人称视角">First-person view</span></p>
        <ul class="module-list">
            <li><strong>💥 核心价值</strong>：当你想表现主角“疯了”、极度恐慌，或想让观众体验“身临其境”的窒息感时，你需要“物理扭曲现实”。</li>
            <li><strong>🎬 殿堂级影史应用</strong>：<br>
                <span class="film-highlight">《遁入虚无》</span>：全片几乎都是第一人称视角 (POV)，甚至模拟了死后灵魂出窍的视角，极致迷幻。<br>
                <span class="film-highlight">《宠儿》</span>：大量鱼眼镜头拍摄英国皇室宫廷，原本华丽的宫殿扭曲变形，隐喻皇室内部荒诞的权力斗争。
            </li>
            <li><strong>🔗 AI 剪辑组合关系</strong>：<br>
                <strong>【主客观空间转换】</strong>：中景主角被追杀 ➡️ 切入 ➡️ 第一人称鱼眼视角怪物扑向镜头。科幻惊悚短片的流量密码。
            </li>
        </ul>
    </div>

</div>
</div>
    `,objectives:[`理解镜头语法如何影响观众情绪`,`掌握五大镜头心法与 AI 组合逻辑`,`能按“情绪配方”设计分镜并落地到 AI 生成`],preTaskModule:{description:`任选1个景别镜头角度，生成一张“好看”的图片，提交到表单里，同时发【基础入门学习群】`,submitUrl:`https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf`,note:`大家提交上来的图片，我们将会经过挑选，作为景别的课程案例，收录到社团手册里`},ctaModalHtml:`
      <div class="cta-box" style="padding: 0; background: transparent; box-shadow: none; position: relative;">
        <div style="position: absolute; top: -12px; left: -12px; background: #ef4444; color: white; font-weight: 900; font-size: 1.1rem; padding: 4px 12px; transform: rotate(-15deg); border-radius: 6px; box-shadow: 2px 4px 10px rgba(239, 68, 68, 0.4); z-index: 100;">彩蛋！！！</div>
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%); padding: 30px; text-align: center; border-radius: 14px 14px 0 0; position: relative; z-index: 1;">
          <div style="font-size: 3rem; margin-bottom: 10px;">🎁</div>
          <h3 style="margin: 0; color: white; font-size: 1.6rem; font-weight: 900; letter-spacing: 1px;">彩蛋福利已解锁</h3>
        </div>
        <div style="padding: 35px 40px; background: white; border-radius: 0 0 14px 14px; text-align: center;">
          <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 25px 0;">
            恭喜完成本章任务！送你一份 <strong style="color:#0f172a;">AI 出图景别参考小资料</strong>，
            帮你更快把镜头语言落到实战出图。
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 1.05rem; color: #334155; font-weight: bold;">景别练习推荐资料：</p>
            <p style="margin: 0 0 20px 0; font-size: 1.28rem; color: #059669; font-weight: 900;">《AI景别参考资料》</p>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
              <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
              <a href="https://forchangesz.feishu.cn/wiki/EYwBww0XGi3SdYk8DXycTdY8nSP?from=from_copylink" target="_blank" rel="noopener" class="super-pulse-btn" style="display: inline-block; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 900; font-size: 1.05rem;">
                立即查看资料
              </a>
            </div>
          </div>
          <p style="margin: 0; color: #94a3b8; font-size: 0.95rem; font-weight: 500;">建议先挑 1 个景别角度试跑，景别是出图非常核心的部分。</p>
        </div>
      </div>
    `,bonusDocument:{title:`《AI景别参考资料》`,description:`景别练习推荐资料，帮助把镜头语言落到实战出图`,url:`https://forchangesz.feishu.cn/wiki/EYwBww0XGi3SdYk8DXycTdY8nSP?from=from_copylink`},chapterTask:{description:`我已完成第1课学习，并认识并应用景别来生成图片`}},{id:`chapter9`,number:3,title:`第3课：景别和运镜的综合应用`,icon:`🎥`,customHtml:`
<style>
    .week3-lesson2 {
        font-family: 'Noto Sans SC', -apple-system, sans-serif;
        background-color: #f8fafc;
        color: #334155;
        line-height: 1.8;
        margin: 0;
        padding: 30px 15px;
        font-size: 16px;
    }
    .week3-lesson2 .container {
        max-width: 860px;
        margin: 0 auto;
    }
    .week3-lesson2 h2 {
        font-size: 1.7rem;
        color: #0f172a;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 12px;
    }
    .week3-lesson2 .tip {
        margin-bottom: 40px;
        color: #64748b;
        font-size: 1.05rem;
    }
    .week3-lesson2 .prompt-tag {
        background-color: #f8fafc;
        color: #0284c7;
        font-family: 'Courier New', Courier, monospace;
        padding: 4px 10px;
        border-radius: 6px;
        border: 1px solid #cbd5e1;
        font-size: 0.9rem;
        font-weight: bold;
        white-space: nowrap;
        display: inline-block;
        margin: 3px 2px;
    }
    .week3-lesson2 .prompt-tag.with-zh {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
    }
    .week3-lesson2 .prompt-tag.with-zh::after {
        content: attr(data-zh);
        font-size: 0.72rem;
        color: #94a3b8;
        line-height: 1.2;
        font-weight: 500;
    }
    .week3-lesson2 .recipe-card {
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
        border-top: 5px solid #d97706;
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 45px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    }
    .week3-lesson2 .recipe-title {
        font-size: 1.3rem;
        color: #0f172a;
        font-weight: 900;
        margin-bottom: 25px;
    }
    .week3-lesson2 .shot-list {
        margin-bottom: 30px;
    }
    .week3-lesson2 .shot-item {
        background: #f8fafc;
        border-left: 4px solid #0284c7;
        padding: 15px 20px;
        margin-bottom: 10px;
        border-radius: 0 8px 8px 0;
        color: #334155;
        border-top: 1px solid #e2e8f0;
        border-right: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
    }
    .week3-lesson2 .director-notes {
        background-color: #f1f5f9;
        border: 1px dashed #cbd5e1;
        border-radius: 12px;
        padding: 30px 30px 20px;
        position: relative;
        margin-top: 25px;
    }
    .week3-lesson2 .director-notes::before {
        content: '🧠 导演视听心理学拆解';
        display: inline-block;
        background: #1e293b;
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 800;
        padding: 6px 14px;
        border-radius: 20px;
        position: absolute;
        top: -14px;
        left: 20px;
        letter-spacing: 1px;
    }
    .week3-lesson2 .director-notes p {
        margin: 0 0 15px 0;
        font-size: 0.95rem;
        color: #475569;
    }
    .week3-lesson2 .concept-hl {
        color: #0f172a;
        font-weight: 800;
        border-bottom: 2px solid #d97706;
        padding-bottom: 1px;
    }
    .week3-lesson2 .alliance-title {
        font-size: 2.3rem;
        line-height: 1.4;
        text-align: center;
        background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 0 40px 0;
        font-weight: 900;
        letter-spacing: 1px;
    }
    .week3-lesson2 .alert-box {
        background-color: #fffbeb;
        border: 2px dashed #fcd34d;
        padding: 30px;
        border-radius: 12px;
        margin-bottom: 50px;
        box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.05);
        position: relative;
    }
    .week3-lesson2 .alert-box::before {
        content: '💡 新手导演的审美陷阱';
        position: absolute;
        top: -14px;
        left: 20px;
        background: #f59e0b;
        color: #fff;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 900;
        letter-spacing: 1px;
    }
    .week3-lesson2 .alert-title {
        color: #b45309;
        font-size: 1.3rem;
        font-weight: 900;
        margin-bottom: 15px;
        margin-top: 5px;
    }
    .week3-lesson2 .alert-box p {
        margin-bottom: 12px;
    }
    .week3-lesson2 .theory-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 45px;
    }
    .week3-lesson2 .theory-grid .theory-card {
        background: #fff;
        border: 1px solid #e2e8f0;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03);
        border-top: 4px solid #4f46e5;
        margin-bottom: 0;
    }
    .week3-lesson2 .theory-grid .theory-card h3 {
        margin: 0 0 15px;
        color: #0f172a;
        font-size: 1.2rem;
        border-bottom: 1px dashed #e2e8f0;
        padding-bottom: 10px;
    }
    .week3-lesson2 .theory-grid .theory-card p {
        margin-bottom: 10px;
    }
    .week3-lesson2 .golden-recipe {
        background-color: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        margin-bottom: 35px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .week3-lesson2 .golden-recipe:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08);
        border-color: #cbd5e1;
    }
    .week3-lesson2 .recipe-header {
        background: #f8fafc;
        padding: 20px 30px;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .week3-lesson2 .recipe-header h3 {
        margin: 0;
        color: #0f172a;
        font-size: 1.35rem;
        font-weight: 900;
    }
    .week3-lesson2 .recipe-body {
        display: grid;
        grid-template-columns: 35% 65%;
    }
    .week3-lesson2 .recipe-params {
        padding: 30px;
        background: #f1f5f9;
        border-right: 1px solid #e2e8f0;
    }
    .week3-lesson2 .param-group {
        margin-bottom: 20px;
    }
    .week3-lesson2 .param-title {
        font-size: 0.85rem;
        color: #64748b;
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: 8px;
        display: block;
    }
    .week3-lesson2 .recipe-content {
        padding: 30px;
    }
    .week3-lesson2 .case-study {
        margin-bottom: 20px;
    }
    .week3-lesson2 .case-study p {
        margin: 0 0 12px 0;
    }
    .week3-lesson2 .case-study strong {
        color: #4f46e5;
    }
    .week3-lesson2 .why-works {
        background-color: #ecfdf5;
        border-left: 4px solid #10b981;
        padding: 15px 20px;
        border-radius: 0 8px 8px 0;
        margin-top: 15px;
        font-size: 0.95rem;
    }
    .week3-lesson2 .why-works p {
        margin: 0 0 8px 0;
    }
    .week3-lesson2 .why-works p:last-child {
        margin-bottom: 0;
    }
    .week3-lesson2 .mine-table {
        width: 100%;
        border-collapse: collapse;
        margin: 30px 0 50px;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        border: 1px solid #e2e8f0;
    }
    .week3-lesson2 .mine-table th,
    .week3-lesson2 .mine-table td {
        padding: 18px 20px;
        text-align: left;
        border-bottom: 1px solid #e2e8f0;
    }
    .week3-lesson2 .mine-table th {
        background-color: #f1f5f9;
        font-weight: 900;
        color: #0f172a;
        font-size: 1.05rem;
    }
    .week3-lesson2 .mine-table tr:last-child td {
        border-bottom: none;
    }
    .week3-lesson2 .td-good { color: #047857; font-weight: bold; background: #f0fdf4; }
    .week3-lesson2 .td-bad { color: #b91c1c; font-weight: bold; background: #fef2f2; }
    .week3-lesson2 .hl-yellow {
        background-color: rgba(253, 224, 71, 0.25);
        background-image: linear-gradient(transparent 55%, rgba(253, 224, 71, 0.4) 55%);
        color: #fef08a;
        font-weight: 800;
        padding: 4px 8px;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(253, 224, 71, 0.3);
        border: 1px solid rgba(253, 224, 71, 0.4);
    }
    .week3-lesson2 .text-hl {
        color: #4f46e5;
        font-weight: 800;
    }
    @media (max-width: 768px) {
        .week3-lesson2 .theory-grid { grid-template-columns: 1fr; }
        .week3-lesson2 .recipe-body { grid-template-columns: 1fr; }
        .week3-lesson2 .recipe-params { border-right: none; border-bottom: 1px solid #e2e8f0; padding: 20px 30px; }
        .week3-lesson2 .recipe-content { padding: 20px 30px; }
        .week3-lesson2 .mine-table { display: block; overflow-x: auto; white-space: nowrap; }
        .week3-lesson2 .recipe-card { padding: 20px; }
        .week3-lesson2 .director-notes { padding: 30px 20px 20px; }
    }
</style>

<div class="week3-lesson2">
<div class="container">
    <h1 class="alliance-title">🎬 进阶必修：景别与运镜的“完美联姻”法则</h1>

    <div class="alert-box">
        <div class="alert-title">为什么你的 AI 视频总是“没内味儿”、很出戏？</div>
        <p>随着最新的视频模型进化，AI 已经很少出现物理 Bug 了。</p>
        <p><strong>但是，很多人的视频依然看着像<span class="text-hl">廉价的素材堆砌</span>。</strong></p>
        <p>回想一下：你在生图时，做了一张情绪拉满的“主角眼含泪水的大特写”。<br>
        放到视频模型里，随手加了一个 <span class="prompt-tag" style="color: #b45309; border-color: #fcd34d;">Zoom out (向后拉远)</span> 的运镜指令。</p>
        <p><strong>结果画面没崩，但感觉全毁了：</strong><br>
        随着镜头拉远，观众原本聚集在眼泪上的悲伤情绪，<span class="text-hl">瞬间被拉远的背景分散了</span>。<br>
        视频看着极其平庸、不知所云。</p>
        <p style="font-size: 1.1rem; color: #92400e; margin-top: 15px;">这就是典型的 <span class="hl-yellow">“景别与运镜情绪互斥”</span>！</p>
    </div>

    <p style="font-size: 1.15rem; color: #0f172a; margin-bottom: 40px; border-left: 4px solid #4f46e5; padding-left: 15px;">
        今天，我们将揭开 AI 视频美学中最核心的秘密：<br>
        <strong>生图时定的【景别情绪】，决定了做视频时必须使用的【运镜方向】。</strong>
    </p>

    <h2>❓ WHAT：什么是景别与运镜的“联姻”？</h2>
    <p>在“图生视频”的工作流中，你要经历两次创作，它们的分工完全不同：</p>
    <ul style="margin-bottom: 25px;">
        <li style="margin-bottom: 15px;">🖼️ <strong>第一步：生成图片（定景别）</strong> —— 这叫<strong>“<span class="text-hl">奠定情感基调</span>”</strong>。<br>
        景别告诉你，这场戏的重点是看风景，还是看眼神。</li>
        <li>🎥 <strong>第二步：生成视频（定运镜）</strong> —— 这叫<strong>“<span class="text-hl">放大视觉动机</span>”</strong>。<br>
        运镜不是瞎飞的，它必须配合情感基调去强化它。</li>
    </ul>

    <div style="background: #fff; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px;">
        <strong>💡 小白秒懂比喻：</strong><br><br>
        如果在第一步（生图），你让演员在念一首安静深情的短诗（特写）。<br>
        第二步（做视频），你非要摄影机在旁边像直升机一样疯狂绕圈（大范围环绕）。<br>
        观众不仅感受不到深情，还会觉得很滑稽。<br><br>
        <strong>摄影机的运动，必须<span class="hl-yellow">顺应当前画面的情绪</span>。</strong>
    </div>

    <h2>🧠 WHY：为什么要讲究它们的搭配？</h2>
    <div class="theory-grid">
        <div class="theory-card">
            <h3>理论一：【视觉动机理论】</h3>
            <p><strong>摄影机绝不能“为了动而动”</strong></p>
            <p style="color: #475569; font-size: 0.95rem;">
                电影语言里，每一次镜头的运动都需要有<span class="text-hl">“动机”</span>。<br><br>
                如果画面是一个【脸部特写】，动机就是“请看我的表情”。<br>
                如果你强制让它【平移 Pan】，观众的视线被迫离开脸庞去看背景。<br><br>
                这就会产生强烈的<span class="text-hl">视觉撕裂感</span>，观众不知道导演到底想让他看什么。
            </p>
        </div>
        <div class="theory-card" style="border-top-color: #10b981;">
            <h3 style="border-bottom-color: #bbf7d0;">理论二：【情绪动势叠加】</h3>
            <p><strong>好视频是 1+1>2 的共振</strong></p>
            <p style="color: #475569; font-size: 0.95rem;">
                景别是一个<span class="text-hl">静态的矢量</span>（比如：中景带有讲故事的中立态度）。<br>
                而运镜提供了一个<span class="text-hl">动态的矢量</span>（比如：推进带来压迫感）。<br><br>
                只有当两者的情绪方向一致时，才能产生高级感。<br>
                <strong>运镜必须<span class="hl-yellow">放大景别的内在力量</span>，而不是抵消它。</strong>
            </p>
        </div>
    </div>

    <h2>🛠️ HOW：怎么做？影视级“黄金搭档”配方</h2>
    <p style="margin-bottom: 30px;">明白了美学原理，我们在实操中该怎么搭配？<br>以下是 3 套经过好莱坞验证的配方，直接抄作业！</p>

    <div class="golden-recipe">
        <div class="recipe-header"><h3>🏆 搭档一：【展现宏大与史诗】</h3></div>
        <div class="recipe-body">
            <div class="recipe-params">
                <div class="param-group">
                    <span class="param-title">🖼️ 第一步：生图景别</span>
                    <span class="prompt-tag">Extreme long shot</span><br>
                    <span class="prompt-tag">Wide angle</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(极远景 / 广角全景)</p>
                </div>
                <div class="param-group" style="margin-bottom: 0;">
                    <span class="param-title">🎥 第二步：视频运镜</span>
                    <span class="prompt-tag">Pan left/right</span><br>
                    <span class="prompt-tag">Slow Zoom out</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(横向平移 / 缓慢拉出)</p>
                </div>
            </div>
            <div class="recipe-content">
                <div class="case-study">
                    <strong>🎬 影视案例支撑：</strong><br>
                    <p><strong>汽车广告最爱：</strong>一望无际的荒野（极远景），一辆 SUV 在中间。<br>
                    镜头缓缓横向平移（Pan），跟着车跑。<br>
                    完美展现了<span class="text-hl">汽车的性能和天地的广阔</span>。</p>
                    <p><strong>《指环王》：</strong>护戒小队走在雪山脊背上，镜头缓缓向后拉出（Zoom out）。<br>
                    将角色融入大自然，展现出<span class="text-hl">旅途的漫长与史诗感</span>。</p>
                </div>
                <div class="why-works">
                    <strong>✅ 为什么这么搭？</strong><br>
                    <p>“远景”本身就在强调<span class="hl-yellow">“环境大于人物”</span>。</p>
                    <p>通过平移或拉远的运镜，能够最大化地带领观众“巡视”整个宏大世界，强化开阔、磅礴的视觉美学。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="golden-recipe">
        <div class="recipe-header"><h3>🏆 搭档二：【制造紧张与顿悟】</h3></div>
        <div class="recipe-body">
            <div class="recipe-params">
                <div class="param-group">
                    <span class="param-title">🖼️ 第一步：生图景别</span>
                    <span class="prompt-tag">Medium shot</span><br>
                    <span class="prompt-tag">Over shoulder</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(中景 / 过肩镜头)</p>
                </div>
                <div class="param-group" style="margin-bottom: 0;">
                    <span class="param-title">🎥 第二步：视频运镜</span>
                    <span class="prompt-tag">Slow Push in</span><br>
                    <span class="prompt-tag">Zoom in</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(缓慢推进)</p>
                </div>
            </div>
            <div class="recipe-content">
                <div class="case-study">
                    <strong>🎬 影视案例支撑：</strong><br>
                    <p><strong>《教父》开场：</strong>殡仪馆老板在中景中诉苦。<br>
                    镜头用两分钟时间，极其缓慢地向他推进（Slow Push in）。</p>
                    <p>随着镜头越靠越近，观众<span class="text-hl">从旁观者变成了倾听者</span>。<br>
                    心跳跟着画面一点点收紧，直到完全看清他的恐惧。</p>
                </div>
                <div class="why-works">
                    <strong>✅ 为什么这么搭？</strong><br>
                    <p>中景是一个中立的“社交距离”。</p>
                    <p>缓慢推进，就像是剥洋葱，带着观众一点点<span class="hl-yellow">卸下角色的防备，入侵他的内心领域</span>。<br>
                    这是讲故事、塑造悬念的万能高级公式。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="golden-recipe">
        <div class="recipe-header"><h3>🏆 搭档三：【刻画极致的诱惑与悲伤】</h3></div>
        <div class="recipe-body">
            <div class="recipe-params">
                <div class="param-group">
                    <span class="param-title">🖼️ 第一步：生图景别</span>
                    <span class="prompt-tag">Close-up</span><br>
                    <span class="prompt-tag">Macro photo</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(大特写 / 微距)</p>
                </div>
                <div class="param-group" style="margin-bottom: 0;">
                    <span class="param-title">🎥 第二步：视频运镜</span>
                    <span class="prompt-tag" style="border-color:#fca5a5; color:#ef4444;">Static (静止机位)</span><br>
                    <span class="prompt-tag" style="background:#fefce8; color:#b45309;">Wind blowing hair</span>
                    <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(靠提示词驱动内部运动)</p>
                </div>
            </div>
            <div class="recipe-content">
                <div class="case-study">
                    <strong>🎬 影视案例支撑：</strong><br>
                    <p><strong>高级香水/口红广告：</strong>屏幕上只有一张绝美的脸。<br>
                    镜头<strong>完全不移动</strong>，只有<span class="text-hl">一滴水珠滑落，或一缕发丝飘动</span>。</p>
                    <p><strong>《悲惨世界》：</strong>安妮·海瑟薇演唱时，镜头静止。<br>
                    全靠脸上的眼泪和抽搐的肌肉震撼全场。</p>
                </div>
                <div class="why-works">
                    <strong>✅ 为什么这么搭？（审美提升必看！）</strong><br>
                    <p><strong>特写镜头最忌讳<span class="hl-yellow">外在运镜的喧宾夺主</span>！</strong></p>
                    <p>当你的生图已经极具情感张力时，你应该在视频工具里<span class="text-hl">关掉相机的运动（Static）</span>。<br>
                    转而描写画面内部的微运动（如：流泪、眨眼、风吹）。</p>
                    <p>让静止的镜头<span class="text-hl">凝视情感的爆发</span>，才是最高级的美学。</p>
                </div>
            </div>
        </div>
    </div>

    <h2>🚧 课后总结：AI 视频的“情绪排雷表”</h2>
    <p>请把这张表印在脑子里。下次在做“图生视频”时，对照一下自己是不是在做无用功：</p>
    <table class="mine-table">
        <thead>
            <tr>
                <th>🖼️ 生图时的景别是...</th>
                <th>🎥 视频运镜的“黄金加分项”</th>
                <th>❌ 毁掉情绪的“出戏操作”</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>远景 / 大场景</strong><br><span style="font-size:0.85rem; color:#64748b; font-weight:normal;">(重在展现世界观)</span></td>
                <td class="td-good">尽情平移(Pan)、缓慢拉远(Zoom out)，展现宏大叙事。</td>
                <td class="td-bad">突然快速推向一个小角落（让人一头雾水）。</td>
            </tr>
            <tr>
                <td><strong>中景 / 半身像</strong><br><span style="font-size:0.85rem; color:#64748b; font-weight:normal;">(重在建立关系与讲故事)</span></td>
                <td class="td-good">缓慢向前推进 (Push in) 制造压迫感与倾听感。</td>
                <td class="td-bad">无意义的左右横跳平移（打断叙事节奏，像劣质 MV）。</td>
            </tr>
            <tr>
                <td><strong>特写 / 脸部 / 物品</strong><br><span style="font-size:0.85rem; color:#64748b; font-weight:normal;">(重在聚焦情绪与潜台词)</span></td>
                <td class="td-good">机位锁死！只靠微表情或风、雨等元素制造画面内流动。</td>
                <td class="td-bad">向外拉远 (Zoom out) 导致情绪瞬间被稀释、变平庸。</td>
            </tr>
        </tbody>
    </table>

    <div style="background-color: #0f172a; color: #fff; padding: 25px 30px; border-radius: 12px; margin-top: 50px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
        <p style="margin: 0; font-size: 1.15rem; font-weight: 500; letter-spacing: 1px;">
            <span style="color: #f59e0b; font-weight: 900;">💡 导师最后一句话：</span><br><br>
            好的 AI 视频导演，在敲下生图的第一个词时，<span class="text-hl" style="color: #22d3ee;">脑子里就已经想好了等会儿镜头该往哪飞</span>。<br><br>
            <span style="font-size: 1.3rem; font-weight: 900; display: inline-block;">
                <span class="hl-yellow">景别奠定基调，运镜放大情绪。</span><br>两者完美契合，你的 AI 视频才会具备真正的电影感！
            </span>
        </p>
    </div>

    <h2>🎬 终极实战：顶级“情绪配方”解析</h2>
    <p class="tip">💡 <strong>导演小贴士</strong>：生成 AI 视频时，千万不要只写一个动作！单个景别是没有情绪的。情绪，产生于<strong>镜头切换瞬间的“空间对比”与“视角落差”</strong>。按照下面的配方生成素材并在剪映中拼接，体会蒙太奇的魔法！</p>

    <div class="recipe-card">
        <div class="recipe-title">🥶 悬疑与惊悚：无处可逃的窥视感</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (猎物不知情)</strong>：<span class="prompt-tag with-zh" data-zh="全身镜头">Full-body shot</span> + <span class="prompt-tag with-zh" data-zh="高角度俯拍">High angle</span> —— 监控视角，女孩独自走在昏暗小巷。<br></div>
            <div class="shot-item"><strong>镜头 2 (主观压迫)</strong>：<span class="prompt-tag with-zh" data-zh="第一人称视角">First-person view</span> —— 镜头在女孩身后微微晃动，慢慢逼近她的后背。<br></div>
            <div class="shot-item"><strong>镜头 3 (恐惧爆发)</strong>：<span class="prompt-tag with-zh" data-zh="极特写">Extreme close-up</span> —— 女孩猛地回头，画面定格在她惊恐放大的瞳孔上。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">空间压缩理论</span>：本质是“安全空间的步步剥夺”。镜头1提供宏观空间，让观众知道危险。镜头2突变第一人称，观众变为“跟踪狂”，产生生理不适。</p>
            <p><span class="concept-hl">越界效应</span>：镜头3的极特写，彻底击碎“社交安全距离”。画面没有背景只有瞳孔，观众无处可躲被迫全盘接收恐惧。</p>
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🔪 悬疑与惊悚：致命的发现（抽丝剥茧）</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (日常伪装)</strong>：<span class="prompt-tag with-zh" data-zh="中景">Medium shot</span> —— 主角在翻找凌乱的抽屉。<br></div>
            <div class="shot-item"><strong>镜头 2 (局部聚焦)</strong>：<span class="prompt-tag with-zh" data-zh="手部特写">Hand shot</span> —— 颤抖的手从抽屉最深处拿出一张泛黄的老照片。<br></div>
            <div class="shot-item"><strong>镜头 3 (心理战栗)</strong>：<span class="prompt-tag with-zh" data-zh="特写">Close-up</span> —— 主角的脸部肌肉微微抽搐，眼神从疑惑变成极度的恐惧。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">库里肖夫效应</span>：镜头2(老照片)和镜头3(表情)本身是中性的。但剪辑在一起时，观众大脑会自动进行因果关联，脑补照片背后的可怕秘密。</p>
            <p><span class="concept-hl">视觉漏斗</span>：从中景 ➡️ 手部 ➡️ 脸部，导演强迫观众注意力不断收窄。屏蔽外界干扰后，最后面部表情的冲击力会被放大十倍。</p>
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🌌 史诗与科幻：神明降临 / 巨物觉醒</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (世界观建立)</strong>：<span class="prompt-tag with-zh" data-zh="极远景">Extreme long shot</span> —— 苍茫的废土之上，乌云密布，沙尘滚滚。<br></div>
            <div class="shot-item"><strong>镜头 2 (权力碾压)</strong>：<span class="prompt-tag with-zh" data-zh="仰视镜头">Low angle shot</span> —— 巨大的机械神明从沙尘中缓缓站起，遮蔽了天空。<br></div>
            <div class="shot-item"><strong>镜头 3 (人类代入)</strong>：<span class="prompt-tag with-zh" data-zh="背影镜头">Back shot</span> —— 镜头放在渺小的人类身后，面对着前方如山一般的巨物。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">比例失调心理学</span>：敬畏来源于“物理体量的绝对悬殊”。镜头1告诉你世界很大，镜头2告诉你怪物比世界还大。</p>
            <p><span class="concept-hl">心理锚点</span>：镜头3的“背影”是精髓。没有这个人，怪物只是一堆数据。加入背影提供了“比例尺”，观众会不自觉带入，感受巨物的战栗。</p>
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🌆 史诗与科幻：赛博朋克的迷失</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (上帝冷漠)</strong>：<span class="prompt-tag with-zh" data-zh="俯视视角">Top view</span> —— 霓虹闪烁的雨夜街道，人群像蚂蚁一样穿梭。<br></div>
            <div class="shot-item"><strong>镜头 2 (现实扭曲)</strong>：<span class="prompt-tag with-zh" data-zh="鱼眼镜头">Fish eye lens</span> —— 主角走在拥挤的赛博街道，周围高楼向他扭曲挤压。<br></div>
            <div class="shot-item"><strong>镜头 3 (精神迷离)</strong>：<span class="prompt-tag with-zh" data-zh="侧面镜头">Side shot</span> —— 霓虹灯光在主角侧脸上流转，眼神空洞。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">去人性化</span>：垂直俯视剥夺了人的面孔，把人类变成工业社会运转的齿轮。</p>
            <p><span class="concept-hl">环境异化攻击</span>：鱼眼打破透视，大楼向内塌陷将主角囚禁。在视觉上构成了“环境对个体的囚禁感”，完成物理压迫到精神空虚的闭环。</p>
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">💔 情感与文艺：不可言说的离别</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (最后对峙)</strong>：<span class="prompt-tag with-zh" data-zh="过肩镜头">Over shoulder shot</span> —— 男主视角看着女主，女主低着头，画面沉默。<br></div>
            <div class="shot-item"><strong>镜头 2 (克制转身)</strong>：<span class="prompt-tag with-zh" data-zh="背影镜头">Back shot</span> —— 女主转过身，向着大雾中走去，留下落寞的背影。<br></div>
            <div class="shot-item"><strong>镜头 3 (情绪余味)</strong>：<span class="prompt-tag with-zh" data-zh="长焦镜头">Telephoto shots</span> —— 画面被压缩，女主的身影在长焦镜头中慢慢模糊消散。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">情感切断理论</span>：女主转身是“视觉交流的单方面切断”。观众看不到她有没有哭，这种信息留白反而产生巨大的遗憾。</p>
            <p><span class="concept-hl">Z轴空间压缩</span>：长焦镜头的魔法。前景和背景距离被极致压缩，女主拼命走却仿佛在原地踏步，最后物理性溶解在大雾中。隐喻了记忆消散的无力感。</p>
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🥂 情感与文艺：暗流涌动的暧昧</div>
        <div class="shot-list">
            <div class="shot-item"><strong>镜头 1 (社交伪装)</strong>：<span class="prompt-tag with-zh" data-zh="中景">Medium shot</span> —— 两人坐在吧台前喝酒，看似平静地聊天。<br></div>
            <div class="shot-item"><strong>镜头 2 (突破防线)</strong>：<span class="prompt-tag with-zh" data-zh="锁骨/手部特写">Collarbone / Hand shot</span> —— 镜头切到女孩泛红的锁骨，或吧台下不经意触碰的手指。<br></div>
            <div class="shot-item"><strong>镜头 3 (隐秘凝视)</strong>：<span class="prompt-tag with-zh" data-zh="侧脸镜头">Profile</span> —— 男主转过头，深情且具侵略性地注视她的侧脸。<br></div>
        </div>
        <div class="director-notes">
            <p><span class="concept-hl">人际距离学</span>：镜头1是维持体面的“公共距离”。镜头2的局部特写直接跳过安全区，越界进入“亲密空间”。这种视觉上的越轨就是性张力来源。</p>
            <p><span class="concept-hl">凝视理论 (The Gaze)</span>：镜头3交代了局部特写是谁的视角。表面在客套，潜意识视线早已游走。表象与内在的反差，让暧昧拉扯感直接溢出屏幕。</p>
        </div>
    </div>
</div>
</div>
    `,objectives:[`掌握运镜视频中常见的情绪配方与镜头组合`,`理解空间落差和视角切换带来的情绪放大机制`,`能按配方完成一段具电影感的运镜分镜`],chapterTask:{description:`我已经完成第3课的阅读学习，并大致理解了景别、运镜的搭配使用`}},{id:`chapter10`,number:2,title:`第2课：运镜视频的雏鹰起飞`,icon:`🦅`,customHtml:`
<style>
    .week3-lesson3 {
        --bg-base: #f8fafc;
        --bg-card: #ffffff;
        --text-main: #334155;
        --text-title: #0f172a;
        --accent-primary: #4f46e5;
        --accent-secondary: #0ea5e9;
        --accent-success: #10b981;
        --accent-warning: #f59e0b;
        --accent-danger: #ef4444;
        --border-color: #e2e8f0;
        --highlight-yellow: rgba(253, 224, 71, 0.6);
        font-family: 'Noto Sans SC', -apple-system, sans-serif;
        background-color: var(--bg-base);
        color: var(--text-main);
        line-height: 1.8;
        margin: 0;
        padding: 40px 15px;
        font-size: 16px;
    }

    .week3-lesson3 .container {
        max-width: 860px;
        margin: 0 auto;
    }

    .week3-lesson3 h1 {
        font-size: 2.4rem;
        line-height: 1.4;
        text-align: center;
        background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 15px;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .week3-lesson3 .main-subtitle {
        text-align: center;
        color: #64748b;
        font-size: 1.15rem;
        margin-bottom: 50px;
        font-weight: 500;
    }

    .week3-lesson3 h2 {
        font-size: 1.75rem;
        color: var(--text-title);
        margin-top: 60px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 12px;
    }

    .week3-lesson3 .quote-box {
        background-color: var(--bg-card);
        border-left: 5px solid var(--accent-primary);
        padding: 25px 30px;
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--text-title);
        border-radius: 8px;
        margin-bottom: 50px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        font-style: italic;
        line-height: 1.6;
    }

    .week3-lesson3 .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 60px;
    }
    .week3-lesson3 .pain-box {
        background: #fef2f2;
        border: 1px solid #fecaca;
        padding: 25px;
        border-radius: 12px;
    }
    .week3-lesson3 .value-box {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        padding: 25px;
        border-radius: 12px;
    }
    .week3-lesson3 .box-title {
        font-size: 1.2rem;
        font-weight: 900;
        margin-bottom: 15px;
    }

    .week3-lesson3 .theory-card {
        background-color: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 35px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    .week3-lesson3 .theory-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08);
        border-color: #cbd5e1;
    }

    .week3-lesson3 .theory-title {
        font-size: 1.4rem;
        font-weight: 900;
        color: var(--text-title);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }

    .week3-lesson3 .theory-section {
        margin-bottom: 15px;
        padding-left: 20px;
        position: relative;
    }
    .week3-lesson3 .theory-section::before {
        content: '';
        position: absolute;
        left: 0;
        top: 6px;
        bottom: -6px;
        width: 3px;
        background-color: var(--border-color);
        border-radius: 3px;
    }

    .week3-lesson3 .psychology-box {
        background-color: #f1f5f9;
        border: 1px dashed #cbd5e1;
        padding: 15px 20px;
        border-radius: 8px;
        margin: 15px 0 20px 0;
        color: #475569;
    }
    .week3-lesson3 .psychology-box strong {
        color: var(--accent-primary);
        display: block;
        margin-bottom: 5px;
        font-size: 1.05rem;
    }

    .week3-lesson3 .hl-yellow {
        background-image: linear-gradient(transparent 50%, var(--highlight-yellow) 50%);
        color: var(--text-title);
        font-weight: 800;
        padding: 0 4px;
        border-radius: 2px;
    }
    .week3-lesson3 .hl-slant {
        position: relative;
        display: inline-block;
        font-weight: 800;
        z-index: 0;
    }
    .week3-lesson3 .hl-slant::before {
        content: '';
        position: absolute;
        left: -3px;
        right: -3px;
        bottom: 2px;
        height: 54%;
        background: rgba(253, 224, 71, 0.72);
        transform: skewX(-12deg);
        border-radius: 3px;
        z-index: -1;
    }

    .week3-lesson3 .prompt-tag {
        background-color: #f8fafc;
        color: var(--accent-secondary);
        font-family: 'Courier New', Courier, monospace;
        padding: 3px 8px;
        border-radius: 6px;
        border: 1px solid #cbd5e1;
        font-size: 0.9rem;
        font-weight: bold;
    }
    .week3-lesson3 .prompt-tag.with-zh {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        vertical-align: middle;
    }
    .week3-lesson3 .prompt-tag.with-zh::after {
        content: attr(data-zh);
        font-size: 0.72rem;
        color: #94a3b8;
        line-height: 1.2;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    .week3-lesson3 .recipe-card {
        background-color: #ffffff;
        border: 1px solid var(--border-color);
        border-top: 5px solid var(--accent-success);
        border-radius: 16px;
        padding: 35px;
        margin-bottom: 45px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    }

    .week3-lesson3 .recipe-title {
        font-size: 1.35rem;
        color: var(--text-title);
        font-weight: 900;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .week3-lesson3 .shot-list {
        margin-bottom: 25px;
    }
    .week3-lesson3 .shot-item {
        background: #f8fafc;
        border-left: 4px solid var(--accent-secondary);
        padding: 16px 20px;
        margin-bottom: 12px;
        border-radius: 0 8px 8px 0;
        color: var(--text-main);
        border: 1px solid var(--border-color);
        border-left: 4px solid var(--accent-secondary);
    }
    .week3-lesson3 .shot-item strong {
        color: var(--text-title);
    }

    .week3-lesson3 .why-works {
        background-color: #ecfdf5;
        border-left: 4px solid #10b981;
        padding: 20px;
        border-radius: 0 8px 8px 0;
        margin-top: 20px;
    }
    .week3-lesson3 .why-works .title {
        color: #047857;
        font-weight: 900;
        margin-bottom: 8px;
        display: block;
    }

    .week3-lesson3 .divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--border-color), transparent);
        margin: 60px 0;
        border: none;
    }

    .week3-lesson3 .cta-box {
        background: linear-gradient(135deg, #ffffff 0%, #fefce8 100%);
        border: 1px solid #fef08a;
        padding: 40px 30px;
        border-radius: 16px;
        text-align: center;
        margin-top: 60px;
        box-shadow: 0 20px 40px -10px rgba(234, 179, 8, 0.15);
    }
    .week3-lesson3 .cta-box h3 {
        margin-top: 0;
        color: #b45309;
        font-size: 1.5rem;
        font-weight: 900;
    }
    .week3-lesson3 .cta-submit-wrap {
        margin: 0 0 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    .week3-lesson3 .cta-hand {
        font-size: 1.3rem;
        animation: hand-nudge 1.1s ease-in-out infinite;
        transform-origin: center;
        user-select: none;
    }
    .week3-lesson3 .cta-submit-link {
        display: inline-block;
        color: #ffffff;
        text-decoration: none;
        font-weight: 800;
        padding: 10px 16px;
        border-radius: 8px;
        background: linear-gradient(120deg, #10b981, #22c55e, #10b981);
        background-size: 220% 220%;
        box-shadow: 0 8px 18px rgba(16, 185, 129, 0.3);
        animation: gradient-breath 3s ease-in-out infinite, btn-breath 1.8s ease-in-out infinite;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .week3-lesson3 .cta-submit-link:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 22px rgba(16, 185, 129, 0.4);
    }

    @keyframes hand-nudge {
        0%, 100% { transform: translateX(0) scale(1); opacity: 0.9; }
        50% { transform: translateX(4px) scale(1.08); opacity: 1; }
    }
    @keyframes gradient-breath {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    @keyframes btn-breath {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
    }

    @media (max-width: 768px) {
        .week3-lesson3 .grid-2 { grid-template-columns: 1fr; }
        .week3-lesson3 h1 { font-size: 1.9rem; }
        .week3-lesson3 .theory-card, .week3-lesson3 .recipe-card { padding: 25px 20px; }
    }
</style>

<div class="week3-lesson3">
<div class="container">

    <h1>🎬 为什么你的AI视频像“动态PPT”？</h1>
    <div class="main-subtitle">掌握“运镜魔法”，从盲盒玩家蜕变成 AI 大导演</div>

    <div class="quote-box">
        “没有运镜的 AI 视频，只是一张在抽搐的壁纸；掌握了运镜，你才真正拿起了摄影机，成为了操控观众心跳的上帝。”
    </div>

    <div class="grid-2">
        <div class="pain-box">
            <div class="box-title" style="color: var(--accent-danger);">❌ 为什么总有“塑料网感”？</div>
            <p>即使画质到了 4K，依然看着像 PPT？因为 AI 默认的生成逻辑是<strong>“发呆式定机位”</strong>。</p>
            <p>人物在中间眨眼，背景像果冻一样乱扭。观众的眼睛没有被引导，三秒钟就会觉得无聊、虚假、出戏。</p>
        </div>
        <div class="value-box">
            <div class="box-title" style="color: #059669;">✅ 运镜的三大降维打击价值</div>
            <p><strong>1. 隐藏 AI 瑕疵的外挂</strong>：加入跟随运镜产生物理动态模糊，完美掩盖背景崩坏。<br>
            <strong>2. 强制接管“视觉呼吸”</strong>：推镜头强制观众心跳加速。运镜是你把情绪塞进观众脑子里的唯一途径。<br>
            <strong>3. 建立三维空间感</strong>：前景后景产生相对位移，打破 2D 平面感。</p>
        </div>
    </div>

    <div class="secret-box" style="background: rgba(79, 70, 229, 0.05); border: 1px dashed var(--accent-primary); margin: 10px 0 24px;">
        <h3 style="margin-top: 0; color: var(--accent-primary);">📚 课程必修资料：</h3>
        <p style="font-weight: bold; margin-bottom: 5px;">🎯 观看直播回放：【AI运镜基础】</p>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 0;">👨🏻‍🏫 san-山雨老师</p>
        <div style="display: flex; align-items: center; margin-top: 10px; gap: 10px;">
            <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
            <a href="https://fc0.cc/320e1t/1GbDk" target="_blank" rel="noopener" class="pulse-btn" style="display: inline-block; background: var(--accent-primary); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                🎬 直播回放：AI运镜基础
            </a>
        </div>
    </div>

    <hr class="divider">

    <h2>🧠 四大核心运镜的“视听心理学”</h2>
    <p style="margin-bottom: 40px; color: #64748b;">不要把运镜当成摄影机的移动，<strong>要把运镜当成“观众心理防线的突破口”。</strong></p>

    <div class="theory-card">
        <div class="theory-title">🗡️ 第一式：推镜头 <span class="prompt-tag with-zh" data-zh="推镜头 / 变焦推进" style="margin-left: 15px;">Push in / Zoom in</span></div>
        <div class="theory-section" style="--border-color: #38bdf8;">
            <p><strong>👁️ 表面动作</strong>：画面不断放大，向目标逼近。</p>
            <div class="psychology-box">
                <strong>🧠 心理学支撑：【视野剥夺理论】</strong>
                当镜头向主角推进时，画面边缘的环境被一点点“切掉”。观众的视线失去了逃生通道，被迫死死盯着主角的微小表情或某个关键道具。
            </div>
            <p><strong>🎬 核心表现 (极度专注/危险降临)</strong>：缓慢的 Push in 就像一把无形的手术刀，切开角色平静的外表，把内心的恐惧直接掏给观众看。</p>
            <p><span class="hl-yellow">💡 AI 视频价值</span>：当你生成的 AI 人物没有大动作，全靠眼神时，必须用 Push in，否则画面极其枯燥。</p>
        </div>
    </div>

    <div class="theory-card">
        <div class="theory-title">🕳️ 第二式：拉镜头 <span class="prompt-tag with-zh" data-zh="拉镜头 / 变焦拉远" style="margin-left: 15px;">Pull out / Zoom out</span></div>
        <div class="theory-section" style="--border-color: #818cf8;">
            <p><strong>👁️ 表面动作</strong>：画面不断后退，视野越来越宽广。</p>
            <div class="psychology-box">
                <strong>🧠 心理学支撑：【客体化退行】</strong>
                镜头后退，代表观众在心理上“远离”主角。主角在画面中变得越来越小，从一个有血有肉的人，变成了一个被庞大环境吞噬的“客体（物体）”。
            </div>
            <p><strong>🎬 核心表现 (绝望/无力/宿命感)</strong>：主角战败倒地，镜头缓缓拉出，展现漫山遍野的敌军。观众会感到一种深深的无能为力，原来他只是蝼蚁。</p>
            <p><span class="hl-yellow">💡 AI 视频价值</span>：极度适合用于视频结尾 (Outro)，或最大化展现你生成的宏大 AI 场景（赛博城市/废土）。</p>
        </div>
    </div>

    <div class="theory-card">
        <div class="theory-title">👻 第三式：跟随 / 跟踪 <span class="prompt-tag with-zh" data-zh="跟踪镜头" style="margin-left: 15px;">Tracking shot</span></div>
        <div class="theory-section" style="--border-color: #f472b6;">
            <p><strong>👁️ 表面动作</strong>：摄影机长了脚，跟在主角身后/身旁一起移动。</p>
            <div class="psychology-box">
                <strong>🧠 心理学支撑：【动觉共情与盲区焦虑】</strong>
                跟随移动会让观众产生“我也在走”的错觉（动觉共情）。更绝的是“背面跟随”即观众只能看到主角的前方，看不到背后的死角，这种“信息不对等”会引发极强的潜意识焦虑。
            </div>
            <p><strong>🎬 核心表现 (临场感与逃亡感)</strong>：恐怖片最爱。镜头在主角背后剧烈晃动跟随，观众仿佛成了那个喘着粗气的追杀者，或是逃命的同伴。</p>
        </div>
    </div>

    <div class="theory-card">
        <div class="theory-title">🧭 第四式：摇镜头 <span class="prompt-tag with-zh" data-zh="左摇 / 右摇" style="margin-left: 15px;">Pan left / Pan right</span></div>
        <div class="theory-section" style="--border-color: #fbbf24;">
            <p><strong>👁️ 表面动作</strong>：机位不动，向左或向右转头。</p>
            <div class="psychology-box">
                <strong>🧠 心理学支撑：【视线引导与悬念释放】</strong>
                摇镜头的本质是“控制观众获取信息的速度”。一开始不给你看全貌，慢慢转过去，让你产生“那边到底有什么”的期待。
            </div>
            <p><strong>🎬 核心表现 (因果关系的建立)</strong>：比如左边是正在睡觉的婴儿，镜头缓缓向右摇，停在窗外一张惨白的脸上。由于“时间延迟”带来的惊吓，比直接切画面恐怖十倍。</p>
        </div>
    </div>

    <hr class="divider">

    <h2>🚀 进阶实战：AI 视频的情绪组合配方</h2>

    <div class="quote-box" style="border-left-color: #ef4444; background: #fef2f2; font-size: 1rem; margin-bottom: 35px;">
        <span style="color: #b91c1c;">⚠️ 核心铁律：什么是【动势连贯性】？</span><br>
        <span style="font-weight: normal; color: #475569;">物理运动的方向必须连贯！错误组合（视觉撞车）：镜头A向左摇，紧接着镜头B向右摇。观众大脑瞬间“晕车”。<br>
        顺滑组合（动势接力）：镜头A向前推，镜头B也是向前推。虽然场景换了，但“向内探索”的动能没断，如丝般顺滑。</span>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🔪 配方一：【窒息的追杀】 <span style="font-size:1rem; font-weight:normal; color:#64748b; margin-left:10px;">(利用方向连续性与速度差)</span></div>
        <div class="shot-list">
            <div class="shot-item"><strong>片段 A (建立危机)</strong>：<span class="prompt-tag with-zh" data-zh="远景，向右摇镜">Wide shot, Pan right</span> 展示森林全貌，镜头缓缓<span class="hl-yellow">向右摇</span>，扫过漆黑的树木。</div>
            <div class="shot-item"><strong>片段 B (动觉共情)</strong>：<span class="prompt-tag with-zh" data-zh="向右跟拍">Tracking shot right</span> 镜头跟着男主<span class="hl-yellow">向右狂奔</span>，树枝在画面边缘飞速后退。*(保持了A的向右动势，不晕)*</div>
            <div class="shot-item"><strong>片段 C (视野剥夺)</strong>：<span class="prompt-tag with-zh" data-zh="快速推镜">Fast Push in</span> 男主猛回头，镜头像离弦的箭瞬间推向他惊恐的眼睛。</div>
        </div>
        <div class="why-works">
            <span class="title">🎯 为什么有效？</span>
            前两段在积攒横向运动的“势能”，最后一段突然变成纵向的“刺入”（Push in），彻底打破运动惯性，情绪瞬间爆炸。
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">🌌 配方二：【宏大的孤独 / 末日降临】 <span style="font-size:1rem; font-weight:normal; color:#64748b; margin-left:10px;">(利用一静一动反差)</span></div>
        <div class="shot-list">
            <div class="shot-item"><strong>片段 A (静态交代)</strong>：<span class="prompt-tag with-zh" data-zh="静止机位">Static shot</span> 极其安静的画面，主角背对镜头，面对废弃的巨大城市。</div>
            <div class="shot-item"><strong>片段 B (客体化退行)</strong>：<span class="prompt-tag with-zh" data-zh="慢速拉镜">Slow Pull out</span> 镜头以“神明般冷漠”的姿态缓缓后退。主角变小，废墟边缘展现。</div>
            <div class="shot-item"><strong>片段 C (宿命感确立)</strong>：<span class="prompt-tag with-zh" data-zh="上摇镜头">Tilt up</span> 拉到极远景后，镜头缓慢上摇，停在天空中遮天蔽日的异星母舰上。</div>
        </div>
        <div class="why-works">
            <span class="title">🎯 为什么有效？</span>
            固定机位（极静） -> 缓慢拉出（孤独感滋生） -> 向上摇镜头（展现压倒性的威胁）。不需要任何爆炸特效，就能产生极深的绝望感。
        </div>
    </div>

    <div class="recipe-card">
        <div class="recipe-title">👻 配方三：【不可名状的悬疑】 <span style="font-size:1rem; font-weight:normal; color:#64748b; margin-left:10px;">(利用视线的延迟揭示)</span></div>
        <div class="shot-list">
            <div class="shot-item"><strong>片段 A (聚焦局部)</strong>：<span class="prompt-tag with-zh" data-zh="推镜头">Push in</span> 镜头慢慢推近桌上一个正在滴血的复古音乐盒。</div>
            <div class="shot-item"><strong>片段 B (空间探索)</strong>：<span class="prompt-tag with-zh" data-zh="左摇镜头">Pan Left</span> 镜头离开音乐盒，顺着血迹像幽灵一样向左看去。</div>
            <div class="shot-item"><strong>片段 C (突发惊吓)</strong>：<span class="prompt-tag with-zh" data-zh="静止机位，突然揭示">Static, Sudden reveal</span> 画面瞬间切到阴暗角落里站着的一个无面人。</div>
        </div>
        <div class="why-works">
            <span class="title">🎯 为什么有效？</span>
            用“推”和“摇”故意拖延时间，让观众大脑疯狂预警。在情绪绷到最紧的瞬间，突然切到静止的可怕画面，完成标准的 Jump Scare（跳跃性惊吓）。
        </div>
    </div>

    <div class="cta-box">
        <h3>💡 导师结语：拿起你的指挥棒</h3>
        <p style="color: #475569; font-size: 1.05rem; margin-bottom: 25px;">在生成 AI 视频时，把运镜提示词当成你手里的指挥棒。<br><strong>别贪心：</strong>一次只给 AI 下达一个明确指令。<strong>想好再剪：</strong>遵循动势连贯性原则。</p>
        <div style="max-width: 760px; margin: 0 auto; text-align: left; background: #fff; padding: 18px; border-radius: 10px; border: 1px dashed #f59e0b;">
            <p style="margin: 0 0 10px 0; color: #b45309; font-weight: 800;">
                📝 作业任务：<span class="hl-slant">任选 1 种运镜</span>，生成一段 5 秒的短视频，提交到表单里，同时发【基础入门学习群】
            </p>
            <div class="cta-submit-wrap">
                <span class="cta-hand">👉</span>
                <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" rel="noopener" class="cta-submit-link">
                    >> 提交到《补基础：AI 运镜5秒短视频》
                </a>
            </div>
            <p style="margin: 0; color: #475569; font-size: 0.95rem;">
                大家提交上来的短视频，我们将会经过挑选，作为运镜的课程案例，收录到社团手册里！
            </p>
        </div>
    </div>

</div>
</div>
    `,objectives:[`理解四大核心运镜动作背后的视听心理学逻辑`,`掌握动势连贯性并能避免镜头方向冲突`,`能按情绪配方独立设计三段式运镜视频素材`],ctaModalHtml:`
      <div class="cta-box" style="padding: 0; background: transparent; box-shadow: none; position: relative;">
        <div style="position: absolute; top: -12px; left: -12px; background: #ef4444; color: white; font-weight: 900; font-size: 1.1rem; padding: 4px 12px; transform: rotate(-15deg); border-radius: 6px; box-shadow: 2px 4px 10px rgba(239, 68, 68, 0.4); z-index: 100;">彩蛋！！！</div>
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%); padding: 30px; text-align: center; border-radius: 14px 14px 0 0; position: relative; z-index: 1;">
          <div style="font-size: 3rem; margin-bottom: 10px;">🎁</div>
          <h3 style="margin: 0; color: white; font-size: 1.6rem; font-weight: 900; letter-spacing: 1px;">运镜彩蛋已解锁</h3>
        </div>
        <div style="padding: 35px 40px; background: white; border-radius: 0 0 14px 14px; text-align: center;">
          <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 25px 0;">
            恭喜完成本章任务！送你一份可直接套用的
            <strong style="color:#0f172a;">【AI运镜提示词】</strong>，
            帮你快速提升运镜视频生成效率。
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 1.05rem; color: #334155; font-weight: bold;">山雨老师分享资料：</p>
            <p style="margin: 0 0 20px 0; font-size: 1.28rem; color: #059669; font-weight: 900;">《AI运镜提示词》</p>
            <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
              <span class="click-hand-anim" style="font-size: 1.5rem;">👉</span>
              <a href="https://forchangesz.feishu.cn/docx/AA8MdQDZio7sLkx2W7YcNWuKntc?from=from_copylink" target="_blank" rel="noopener" class="super-pulse-btn" style="display: inline-block; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 900; font-size: 1.05rem;">
                立即查看运镜提示词
              </a>
            </div>
          </div>
          <p style="margin: 0; color: #94a3b8; font-size: 0.95rem; font-weight: 500;">建议先复制 1 组推拉运镜词，直接在你的下一个镜头里实测。</p>
        </div>
      </div>
    `,bonusDocument:{title:`《AI运镜提示词》`,description:`山雨老师分享的可直接套用 AI 运镜提示词`,url:`https://forchangesz.feishu.cn/docx/AA8MdQDZio7sLkx2W7YcNWuKntc?from=from_copylink`},chapterTask:{description:`我已经学会了【运镜】！`}},{id:`chapter7`,number:7,title:`作业2提交：群内 + 表单`,icon:`📝`,isAssignment:!0,objectives:[`提交基础作业2：摄影练习`],assignments:[{id:`assignment2`,title:`基础作业2：摄影练习`,status:`手视角 + 双重曝光效果`,required:!0,requirements:[`用Midjourney出一张"手视角"的图`,`用Midjourney出一张"双重曝光效果"的图`],tools:[{name:`风变MJ`,url:`https://art.forchange.cn/mj`,desc:`点击打开`}],submitUrl:`https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf`,btnText:`📝 提交作业`}],chapterTask:{description:`我已完成作业2的群内和表单双提交`,tips:`两个动作都要完成：群内发 #基础作业2 + 填提交表单`}}],te=`/assets/image1-CNx8votA.png`,j=`/assets/image2-Bv8tmdkG.png`,M=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社团基础：视听语言-拉片小手册</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <style>
        /* 还原飞书文档风格的 UI 变量 */
        :root {
            --bg-color: #ffffff;
            --text-main: #1f2329;
            --text-muted: #8f959e;
            --link-color: #3370ff;
            --border-color: #dee0e3;
            --callout-bg-orange: #fff7e8;
            --callout-bg-blue: #f0f4ff;
            --callout-bg-gray: #f4f5f9;
            --hl-blue: #e1eaff;
            --hl-green: #d1f2e6;
            --table-header-bg: #f4f5f9;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #f7f8fa; /* 网页底色 */
            color: var(--text-main);
            line-height: 1.85;
            margin: 0;
            padding: 40px 15px;
        }

        .feishu-container {
            max-width: 900px;
            margin: 0 auto;
            background-color: var(--bg-color);
            padding: 50px 60px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* 标题系统 */
        h1 {
            font-size: 2.2rem;
            font-weight: 900;
            margin-top: 0;
            margin-bottom: 40px;
            color: #1f2329;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 20px;
        }
        h2 {
            font-size: 1.55rem;
            font-weight: 800;
            margin-top: 50px;
            margin-bottom: 25px;
            color: #1f2329;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 15px;
            color: #1f2329;
        }

        p {
            margin: 14px 0;
            color: #333333;
        }

        a {
            color: var(--link-color);
            text-decoration: none;
            word-break: break-all;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }

        /* ✨ 关键词高亮系统 (优化核心) */
        strong {
            font-weight: 700;
            color: #1f2329;
        }
        .hl-blue {
            background-color: var(--hl-blue);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: var(--link-color);
        }
        .hl-green {
            background-color: var(--hl-green);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: #047857;
        }
        /* 荧光笔涂抹效果 */
        .hl-yellow {
            background-image: linear-gradient(transparent 60%, rgba(253, 224, 71, 0.8) 60%);
            font-weight: 800;
            color: #1f2329;
            padding: 0 4px;
            border-radius: 2px;
        }
        /* 文本主题色加粗 */
        .text-hl {
            color: var(--link-color);
            font-weight: 800;
        }
        .text-orange {
            color: #ff7d00;
            font-weight: 800;
        }
        .text-purple {
            color: #7b61ff;
            font-weight: 800;
        }

        /* 引用块 */
        .quote-block {
            border-left: 4px solid var(--link-color);
            background: #f8f9fa;
            padding: 15px 20px;
            color: #4a4a4a;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            font-size: 1.05rem;
        }

        /* 任务/提示卡片 (Callout) */
        .callout {
            padding: 20px 25px;
            border-radius: 8px;
            margin: 25px 0;
            border: 1px solid transparent;
        }
        .callout-orange {
            background-color: var(--callout-bg-orange);
            border-color: #ffd6a5;
        }
        .callout-blue {
            background-color: var(--callout-bg-blue);
            border-color: #c2d1ff;
        }
        .callout-gray {
            background-color: var(--callout-bg-gray);
            border-color: var(--border-color);
        }

        /* 列表优化 */
        ul {
            padding-left: 25px;
            margin: 15px 0;
        }
        ul li {
            margin-bottom: 12px;
        }

        /* 表格样式优化 */
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }
        th, td {
            border-bottom: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            padding: 16px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: var(--table-header-bg);
            font-weight: 800;
            color: #1f2329;
            text-align: center;
        }
        td {
            color: #333333;
        }
        tr:last-child td { border-bottom: none; }
        td:last-child, th:last-child { border-right: none; }

        /* 模拟图片占位图 */
        .img-placeholder {
            background-color: #f4f5f9;
            border: 1px dashed #bbbfc4;
            border-radius: 8px;
            text-align: center;
            color: var(--text-muted);
            padding: 60px 20px;
            margin: 25px 0;
            font-size: 0.95rem;
        }

        /* 专属黑底文字图模拟 */
        .black-img-mock {
            background-color: #141414;
            color: #f4f5f9;
            padding: 30px;
            border-radius: 12px;
            margin: 25px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .black-img-text {
            font-size: 1.05rem;
            line-height: 2.2;
        }
        .black-img-text strong {
            font-size: 1.15rem;
            color: #fff;
        }

        @media (max-width: 768px) {
            .feishu-container {
                padding: 30px 20px;
            }
            h1 { font-size: 1.8rem; }
            h2 { font-size: 1.4rem; }
            .black-img-mock { flex-direction: column; align-items: flex-start; gap: 20px; }
            .black-img-mock > div:last-child { width: 100% !important; }
        }
    </style>
</head>
<body>

<div class="feishu-container">

    <h1>社团基础：视听语言-拉片小手册</h1>

    <h2>🎯 补课任务 1：认识拉片</h2>

    <p>做了1000个小视频，为什么你还做不出一个<span class="text-hl">电影高级感</span>的片子？</p>

    <div class="callout callout-orange">
        <p style="margin: 0; font-size: 1.1rem; color: #b45309;">🎈 <em>在这里，读懂影像的秘密</em></p>
    </div>

    <h3>01 你真的“看懂”电影了吗？</h3>
    <p>我们先来做一个思想实验：</p>
    <p>如果你去米其林餐厅吃了一千顿饭，你觉得自己能成为特级厨师吗？<br>大概率不能。你只会成为一个<span class="text-orange">挑剔的美食家</span>。</p>
    
    <p>同样的道理：<br><strong>如果你在 Netflix 或电影院看了一千部电影，你能成为导演（哪怕是拍好 Vlog 的博主）吗？</strong><br>也不能。</p>
    
    <p>❌ 观众看电影，是在<span class="hl-yellow">“消费”情感</span>。<br>你会哭、会笑、会紧张，完全被剧情牵着鼻子走。</p>
    
    <p>✅ 创作者看电影，是在<span class="hl-yellow">“解剖”技术</span>。<br>他们冷酷无情，他们不再关心主角会不会死，他们只关心——<span class="hl-blue">刚才那个镜头，为什么要用广角？</span></p>
    
    <p>想从“吃货”变成“厨师”，你需要掌握一项核心技能。<br>在电影圈，它有一个听起来很复古的名字——<strong class="text-hl" style="font-size: 1.2rem;">「拉片」</strong>。</p>

    <div class="img-placeholder">
        [图片：这才这是电影真正的样子（胶片背景图）]
    </div>

    <h3>02 什么是“拉片”？Lā Piàn</h3>
    <p>“拉片”这个词，听起来很物理。</p>
    <p>它的确源于物理动作：在胶片时代，剪辑师需要在剪辑台上，<span class="text-hl">用手拉动胶片，一格一格地审视画面</span>。</p>
    <p>放到今天，拉片的定义非常简单粗暴：</p>
    
    <div class="quote-block">
        <strong>把一部电影彻底“拆”开。</strong><br>
        不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影<span class="text-orange">拆解成几百、上千个独立的镜头</span>。
    </div>

    <p>如果说看电影是欣赏一座宏伟的建筑，<span class="hl-blue">那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</span></p>

    <h3>03 拉片，到底在“拉”什么？</h3>
    <p>当你开始拉片，你的手边不再是爆米花，而是 <strong class="text-hl">Excel 表格</strong>。</p>
    <p>你需要<span class="hl-yellow">像做手术一样</span>，记录下每一个镜头的详细参数：</p>
    
    <ul style="list-style-type: none; padding-left: 0; background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <li>📏 <strong class="text-hl">景别：</strong>是怼脸的特写，还是宏大的远景？</li>
        <li>🎥 <strong class="text-hl">运镜：</strong>摄像机是推拉摇移，还是稳如泰山？</li>
        <li>💡 <strong class="text-hl">光影：</strong>光是从哪打过来的？是冷酷的蓝还是温暖的黄？</li>
        <li>🔊 <strong class="text-hl">声音：</strong>这里为什么要加一声沉闷的鼓点？</li>
        <li>✂️ <strong class="text-hl">剪辑：</strong>为什么在这个瞬间切到了下一个画面？</li>
    </ul>

    <!-- 黑底画面解析模拟 -->
    <div class="black-img-mock">
        <div class="black-img-text">
            <strong>景别：</strong>特写<br>
            <strong>运镜：</strong>固定<br>
            <strong>光影：</strong><span style="color: #93c5fd;">冷蓝色顶光（左上）</span><br>
            <strong>声音：</strong>沉闷鼓点 <span style="color: #cbd5e1;">(情绪铺垫)</span><br>
            <strong>剪辑：</strong>此处切至下一个画面 <span style="color: #cbd5e1;">(情节转折)</span>
        </div>
        <div style="width: 45%; height: 180px; background: #262626; border: 1px solid #404040; border-radius: 8px; display:flex; align-items:center; justify-content:center; color:#a3a3a3;">[电影特写截图]</div>
    </div>

    <p>这听起来是不是很枯燥？</p>
    <p>是的，非常枯燥。 一部90分钟的电影，可能需要你花 10 个小时去拉片。<br>但为什么所有电影学院的学生、所有大导演，都要死磕这件事？</p>

    <h3>04 为什么要自讨苦吃？因为这是“偷师”的唯一捷径</h3>
    <p>拉片，本质上是一种<span class="hl-yellow">“逆向工程”</span>。</p>
    <p><span class="hl-blue">当你把经典电影拆解完之后，神奇的事情发生了——你获得了“导演的眼睛”。</span></p>

    <p>🔥 <strong class="text-orange" style="font-size: 1.1rem;">1. 你不再被剧情“欺骗”</strong></p>
    <p>以前你看恐怖片吓得半死。<br>现在你会想：“哦，这里用了一个<span class="text-hl">‘推镜头+不协和音程’</span>，导演在故意制造压迫感。”<br>你看穿了导演的把戏，你学会了这套把戏。</p>

    <p>🛠️ <strong class="text-purple" style="font-size: 1.1rem;">2. 你拥有了庞大的“素材库”</strong></p>
    <p>当你自己拍 Vlog、拍短视频，不知道怎么拍“两个人吃饭”时……<br>你脑子里会瞬间弹窗：“王家卫在《花样年华》里是<span class="text-hl">用这个角度拍吃饭的</span>，虽然我现在只有一台手机，但我可以模仿他的构图！”<br>你不再是凭感觉乱拍，你是胸有成竹。</p>

    <p>🧠 <strong class="text-hl" style="font-size: 1.1rem;">3. 你的审美将降维打击</strong></p>
    <p>你会发现，你拍出来的东西开始有了<span class="hl-yellow">“电影感”</span>。</p>
    <p><strong>所谓的电影感，不是加个滤镜那么简单。它是<span class="text-hl">节奏</span>、是<span class="text-hl">光线</span>、是<span class="text-hl">视听语言的语法</span>。</strong></p>
    <p>这些东西，只有通过拉片，才能刻进你的 DNA 里。</p>

    <h3>05 写在最后</h3>
    <p>有人问：学拉片有什么好处？能赚钱吗？</p>
    <p>如果你是视频创作者，它能让你的作品<span class="text-orange">从流水账变成“大片”</span>，涨粉变现自然水到渠成。<br>如果你只是普通影迷，它能让你打开新世界的大门。</p>
    <p>你会发现，以前你看电影只看到了表面的一层皮；学会拉片后，你看到了<span class="hl-yellow">骨骼、经络和灵魂</span>。</p>
    <p>从今天开始，试着挑一部你最爱的电影，别只带着眼睛，带上笔。<br>相信我，你会重新认识这部电影。</p>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 2：自己拉片</h2>

    <div class="callout callout-gray">
        <p style="margin-top: 0;">📺 <strong>观看直播回放：【视频拉片解说】</strong></p>
        <p>👨‍🏫 滋滋老师</p>
        <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/rYNX8h" target="_blank">https://fclive.pandacollege.cn/p/rYNX8h</a></p>
        <p style="margin-bottom: 0;">【学员笔记】： <a href="#">📄 滋滋老师：9月24日（周三）</a> <span style="color: #8f959e;">（by：皮皮咩同学）</span></p>
    </div>

    <h3>🛠️ 实操拉片：【工具使用+拉片】</h3>
    <p><strong>a. 工具：飞书表格</strong></p>
    
    <div class="img-placeholder">
        [截图：飞书表格工具使用界面演示]
    </div>

    <h3>🎬 参考：拉片 Excel 模板内容 -《浪浪山的小妖怪》开头部分</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="8%">镜号<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">时间<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">可以不写</span></th>
                    <th width="10%">景别<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">运镜<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="25%">画面内容<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写，可以简单写)</span></th>
                    <th width="13%">声音<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                    <th width="20%">新手分析重点<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>00:00 -<br>00:18</td>
                    <td>大远景 →<br>全景</td>
                    <td>垂直下摇<br>(Tilt Down)</td>
                    <td>开篇是云雾缭绕的高耸山峰，随着镜头慢慢向下移动，露出陡峭的山崖。片尾字幕出现。最后看见主角挑着担子走在山间小路上。</td>
                    <td>空灵、悠远的传统民乐（如笙或笛），伴随风声。</td>
                    <td>【交代环境】 利用<span class="text-hl">长镜头</span>和<span class="text-hl">巨大的高低落差</span>，展现山势的险峻和人的渺小，奠定一种古意、神秘的基调。</td>
                </tr>
                <tr>
                    <td align="center">2</td>
                    <td>00:19 -<br>00:21</td>
                    <td>全景<br>(Full Shot)</td>
                    <td>跟随<br>(Follow)</td>
                    <td>画面色调突变。主角挑着担子从亮处走进了一片漆黑幽蓝的树林。</td>
                    <td>音乐变得低沉，出现类似心跳或脚步的节奏声。</td>
                    <td>【氛围转折】 利用光影和颜色的<span class="text-orange">剧烈反差（白昼→蓝黑）</span>，暗示主角进入了危险或未知的领域（叙事分界点）。</td>
                </tr>
                <tr>
                    <td align="center">3</td>
                    <td>00:22 -<br>00:27</td>
                    <td>特写<br>(Close Up)</td>
                    <td>推进/晃动</td>
                    <td>镜头聚焦在主角脸上。他神情紧张，眼神左右飘忽，仿佛感觉到了什么。</td>
                    <td>音乐停止，突出环境的寂静，或只有沉重的呼吸声。</td>
                    <td>【刻画心理】 通过特写<span class="text-hl">放大面部表情</span>，让观众直接感受到主角的恐惧和不安。</td>
                </tr>
                <tr>
                    <td align="center">4</td>
                    <td>00:28 -<br>00:31</td>
                    <td>主观视点<br>/全景</td>
                    <td>固定/微动</td>
                    <td>画面展示了主角眼中的树林：树木扭曲、枯瘦，像鬼影一样。</td>
                    <td>诡异的风声或环境音效加强。</td>
                    <td>【主观视角】 这不仅仅是拍树，而是拍<span class="hl-yellow">“主角眼里的树”</span>。扭曲的树干外化了主角内心的恐惧。</td>
                </tr>
                <tr>
                    <td align="center">5</td>
                    <td>00:32 -<br>00:34</td>
                    <td>中景<br>(Medium Shot)</td>
                    <td>侧跟拍</td>
                    <td>主角继续前行，但他突然停步或迟疑，警惕地看向前方。</td>
                    <td>突然出现一声尖锐或异样的音效（提示危险临近）。</td>
                    <td>【动作反应】 通过人物的<span class="text-hl">停顿</span>，提示观众：前方有东西出现了。</td>
                </tr>
                <tr>
                    <td align="center">6</td>
                    <td>00:35 -<br>00:40</td>
                    <td>远景<br>(Long Shot)</td>
                    <td>固定镜头</td>
                    <td>树林深处，一块石头上蹲坐着一个黑色的剪影（类似狐狸或书生），背对着主角。</td>
                    <td>寂静，充满压迫感。</td>
                    <td>【悬念揭示】 利用<span class="text-purple">中心构图和剪影效果</span>，营造强烈的神秘感。观众和主角一样，都在猜测“那是什么？”</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 1：拉片-表格模板</p>
        <p>参考上边的表格，创建一个 Excel 表格文档，找一个很短很短的优秀片段，简单做个拉片分析；</p>
        <p><strong class="text-orange">至少分析 4 个镜头！</strong></p>
        <p>>> 提交到作业《补基础1123：拉片表格》：<br>
        <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank">https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf</a></p>
        
        <div style="background: #ffffff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="color: var(--text-muted); margin-top: 0; font-size: 0.95rem;"><em>如果你不知道要分析哪些视频，老师推荐 2 个最佳获奖短片：</em></p>
            <p style="margin-bottom: 5px; font-size: 0.95rem;">🎬 <em>《暴雪南风》：<a href="https://www.bilibili.com/video/BV1XZ4y1q7QN/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
            <p style="margin-bottom: 0; font-size: 0.95rem;">🎬 <em>奥斯卡动画短片《鹬》：<a href="https://www.bilibili.com/video/BV1BZ4y1H79N/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
        </div>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 3：看别人拉片子</h2>
    <p>第92届奥斯卡颁奖典礼公布了所有获奖的作品。在众多获奖者中，韩国导演<strong class="text-hl">奉俊昊</strong>以及其执导的电影<strong class="text-hl">《寄生虫》</strong>，一举获得包含“奥斯卡最佳影片”“最佳国际影片”“最佳剧本”“最佳导演”在内的四个含金量极高的奖项。</p>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 2：11月30日，周日前完成（无需提交）</p>
        <p style="margin-bottom: 0;"><strong>《寄生虫》拉片分析</strong>，观看地址：<a href="https://www.bilibili.com/video/BV1w84y1n7yG/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></p>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🚩 选修：视听语言入门基础</h2>

    <div class="img-placeholder" style="padding: 100px 20px;">
        [视频封面图：AI 影像课程 - 1]
    </div>

    <h3>📖 视听语言的拆解 —— 像学一门外语一样学影像</h3>
    
    <ol style="background: #f8f9fa; padding: 25px 25px 25px 45px; border-radius: 8px;">
        <li style="margin-bottom: 20px;"><strong>理论基石：电影符号学（麦茨）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>核心观点：</strong>视听语言是一种“语言”，有其基本的构成单位、语法和修辞。我们学习它，就是在学习<span class="hl-green">如何与观众进行非言语的、情感和意义的沟通</span>。</li>
            </ul>
        </li>
        <li style="margin-bottom: 20px;"><strong>视听语言的三大构成（与语言学类比）：</strong>
            <ul style="margin-top: 10px;">
                <li><strong class="text-hl">视听元素</strong> (构图、镜头、光线、色彩、声音) = <strong>字/词</strong> (Vocabulary)</li>
                <li><strong class="text-hl">场面调度</strong> (演员、道具、环境的安排) = <strong>语境</strong> (Context)</li>
                <li><strong class="text-hl">剪辑</strong> (镜头的组接与节奏) = <strong>语法与修辞</strong> (Grammar & Rhetoric)</li>
            </ul>
        </li>
        <li><strong>教学方法：追溯“电影史上的第一次”（案例教学）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>运镜：</strong>史上第一个移动镜头<span class="hl-yellow">（船上拍运河）</span>，理解“动态”带来的突破。</li>
                <li><strong>镜头：</strong>史上第一个特写镜头<span class="hl-yellow">《祖母的放大镜》</span>，理解“景别”带来的情感冲击。</li>
                <li><strong>声音：</strong>史上第一部有声电影<span class="hl-yellow">《爵士歌手》</span>，理解“声音”如何改变叙事。</li>
                <li><strong>色彩：</strong>史上第一部彩色片《浮华世界》与色彩运用典范《红色沙漠》，理解“色彩”的情绪表达力。</li>
                <li><strong>剪辑：</strong>
                    <ul style="list-style-type: square;">
                        <li>第一次“剪”：梅里爱《消失的女子》（停机再拍），理解<span class="text-orange">剪辑的魔术性</span>。</li>
                        <li>第一次“辑”：鲍特《消防员的生活》（多场景组接），理解<span class="text-orange">剪辑的叙事功能</span>。</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h3>📺 视听语言的案例演示</h3>
    
    <div class="callout callout-gray" style="margin-bottom: 15px;">
        <p style="margin: 0;">🎬 <strong>直播回放：<a href="#">视听语言课入门</a></strong></p>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="25%">案例赏析</th>
                    <th width="25%">出图小技巧</th>
                    <th width="25%">suno 音乐小技巧</th>
                    <th width="25%">视频镜头的设计思路</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p style="margin-top:0;"><strong>1小时爱情反转 AI 音乐 MV</strong></p>
                        <p style="color: #64748b; font-size: 0.9rem;">江西省政府与上市集团的影视集群园区合作</p>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>MJ 里如何<span class="text-hl">控制角色一致性</span>？</li>
                            <li>大力宗：MJ 如何一次性<span class="text-hl">批量出几十上百张图</span>？</li>
                            <li>绝妙的同构图设计，即梦是如何实现的？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>王菲风格、萨顶顶风格的音乐，怎么写？</li>
                            <li><span class="text-purple">歌词押韵</span>怎么做？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>四段式的镜头空间关系</li>
                            <li><strong>创作思维：</strong>整段视频的故事性主题，视频镜头应如何设计和串联</li>
                            <li><span class="text-orange">快闪镜头</span>的技巧和应用</li>
                        </ol>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</body>
</html>`.match(/<style[^>]*>[\s\S]*?<\/style>/i)?.[0]||``,N=(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社团基础：视听语言-拉片小手册</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <style>
        /* 还原飞书文档风格的 UI 变量 */
        :root {
            --bg-color: #ffffff;
            --text-main: #1f2329;
            --text-muted: #8f959e;
            --link-color: #3370ff;
            --border-color: #dee0e3;
            --callout-bg-orange: #fff7e8;
            --callout-bg-blue: #f0f4ff;
            --callout-bg-gray: #f4f5f9;
            --hl-blue: #e1eaff;
            --hl-green: #d1f2e6;
            --table-header-bg: #f4f5f9;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #f7f8fa; /* 网页底色 */
            color: var(--text-main);
            line-height: 1.85;
            margin: 0;
            padding: 40px 15px;
        }

        .feishu-container {
            max-width: 900px;
            margin: 0 auto;
            background-color: var(--bg-color);
            padding: 50px 60px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* 标题系统 */
        h1 {
            font-size: 2.2rem;
            font-weight: 900;
            margin-top: 0;
            margin-bottom: 40px;
            color: #1f2329;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 20px;
        }
        h2 {
            font-size: 1.55rem;
            font-weight: 800;
            margin-top: 50px;
            margin-bottom: 25px;
            color: #1f2329;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 15px;
            color: #1f2329;
        }

        p {
            margin: 14px 0;
            color: #333333;
        }

        a {
            color: var(--link-color);
            text-decoration: none;
            word-break: break-all;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }

        /* ✨ 关键词高亮系统 (优化核心) */
        strong {
            font-weight: 700;
            color: #1f2329;
        }
        .hl-blue {
            background-color: var(--hl-blue);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: var(--link-color);
        }
        .hl-green {
            background-color: var(--hl-green);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: #047857;
        }
        /* 荧光笔涂抹效果 */
        .hl-yellow {
            background-image: linear-gradient(transparent 60%, rgba(253, 224, 71, 0.8) 60%);
            font-weight: 800;
            color: #1f2329;
            padding: 0 4px;
            border-radius: 2px;
        }
        /* 文本主题色加粗 */
        .text-hl {
            color: var(--link-color);
            font-weight: 800;
        }
        .text-orange {
            color: #ff7d00;
            font-weight: 800;
        }
        .text-purple {
            color: #7b61ff;
            font-weight: 800;
        }

        /* 引用块 */
        .quote-block {
            border-left: 4px solid var(--link-color);
            background: #f8f9fa;
            padding: 15px 20px;
            color: #4a4a4a;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            font-size: 1.05rem;
        }

        /* 任务/提示卡片 (Callout) */
        .callout {
            padding: 20px 25px;
            border-radius: 8px;
            margin: 25px 0;
            border: 1px solid transparent;
        }
        .callout-orange {
            background-color: var(--callout-bg-orange);
            border-color: #ffd6a5;
        }
        .callout-blue {
            background-color: var(--callout-bg-blue);
            border-color: #c2d1ff;
        }
        .callout-gray {
            background-color: var(--callout-bg-gray);
            border-color: var(--border-color);
        }

        /* 列表优化 */
        ul {
            padding-left: 25px;
            margin: 15px 0;
        }
        ul li {
            margin-bottom: 12px;
        }

        /* 表格样式优化 */
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }
        th, td {
            border-bottom: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            padding: 16px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: var(--table-header-bg);
            font-weight: 800;
            color: #1f2329;
            text-align: center;
        }
        td {
            color: #333333;
        }
        tr:last-child td { border-bottom: none; }
        td:last-child, th:last-child { border-right: none; }

        /* 模拟图片占位图 */
        .img-placeholder {
            background-color: #f4f5f9;
            border: 1px dashed #bbbfc4;
            border-radius: 8px;
            text-align: center;
            color: var(--text-muted);
            padding: 60px 20px;
            margin: 25px 0;
            font-size: 0.95rem;
        }

        /* 专属黑底文字图模拟 */
        .black-img-mock {
            background-color: #141414;
            color: #f4f5f9;
            padding: 30px;
            border-radius: 12px;
            margin: 25px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .black-img-text {
            font-size: 1.05rem;
            line-height: 2.2;
        }
        .black-img-text strong {
            font-size: 1.15rem;
            color: #fff;
        }

        @media (max-width: 768px) {
            .feishu-container {
                padding: 30px 20px;
            }
            h1 { font-size: 1.8rem; }
            h2 { font-size: 1.4rem; }
            .black-img-mock { flex-direction: column; align-items: flex-start; gap: 20px; }
            .black-img-mock > div:last-child { width: 100% !important; }
        }
    </style>
</head>
<body>

<div class="feishu-container">

    <h1>社团基础：视听语言-拉片小手册</h1>

    <h2>🎯 补课任务 1：认识拉片</h2>

    <p>做了1000个小视频，为什么你还做不出一个<span class="text-hl">电影高级感</span>的片子？</p>

    <div class="callout callout-orange">
        <p style="margin: 0; font-size: 1.1rem; color: #b45309;">🎈 <em>在这里，读懂影像的秘密</em></p>
    </div>

    <h3>01 你真的“看懂”电影了吗？</h3>
    <p>我们先来做一个思想实验：</p>
    <p>如果你去米其林餐厅吃了一千顿饭，你觉得自己能成为特级厨师吗？<br>大概率不能。你只会成为一个<span class="text-orange">挑剔的美食家</span>。</p>
    
    <p>同样的道理：<br><strong>如果你在 Netflix 或电影院看了一千部电影，你能成为导演（哪怕是拍好 Vlog 的博主）吗？</strong><br>也不能。</p>
    
    <p>❌ 观众看电影，是在<span class="hl-yellow">“消费”情感</span>。<br>你会哭、会笑、会紧张，完全被剧情牵着鼻子走。</p>
    
    <p>✅ 创作者看电影，是在<span class="hl-yellow">“解剖”技术</span>。<br>他们冷酷无情，他们不再关心主角会不会死，他们只关心——<span class="hl-blue">刚才那个镜头，为什么要用广角？</span></p>
    
    <p>想从“吃货”变成“厨师”，你需要掌握一项核心技能。<br>在电影圈，它有一个听起来很复古的名字——<strong class="text-hl" style="font-size: 1.2rem;">「拉片」</strong>。</p>

    <div class="img-placeholder">
        [图片：这才这是电影真正的样子（胶片背景图）]
    </div>

    <h3>02 什么是“拉片”？Lā Piàn</h3>
    <p>“拉片”这个词，听起来很物理。</p>
    <p>它的确源于物理动作：在胶片时代，剪辑师需要在剪辑台上，<span class="text-hl">用手拉动胶片，一格一格地审视画面</span>。</p>
    <p>放到今天，拉片的定义非常简单粗暴：</p>
    
    <div class="quote-block">
        <strong>把一部电影彻底“拆”开。</strong><br>
        不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影<span class="text-orange">拆解成几百、上千个独立的镜头</span>。
    </div>

    <p>如果说看电影是欣赏一座宏伟的建筑，<span class="hl-blue">那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</span></p>

    <h3>03 拉片，到底在“拉”什么？</h3>
    <p>当你开始拉片，你的手边不再是爆米花，而是 <strong class="text-hl">Excel 表格</strong>。</p>
    <p>你需要<span class="hl-yellow">像做手术一样</span>，记录下每一个镜头的详细参数：</p>
    
    <ul style="list-style-type: none; padding-left: 0; background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <li>📏 <strong class="text-hl">景别：</strong>是怼脸的特写，还是宏大的远景？</li>
        <li>🎥 <strong class="text-hl">运镜：</strong>摄像机是推拉摇移，还是稳如泰山？</li>
        <li>💡 <strong class="text-hl">光影：</strong>光是从哪打过来的？是冷酷的蓝还是温暖的黄？</li>
        <li>🔊 <strong class="text-hl">声音：</strong>这里为什么要加一声沉闷的鼓点？</li>
        <li>✂️ <strong class="text-hl">剪辑：</strong>为什么在这个瞬间切到了下一个画面？</li>
    </ul>

    <!-- 黑底画面解析模拟 -->
    <div class="black-img-mock">
        <div class="black-img-text">
            <strong>景别：</strong>特写<br>
            <strong>运镜：</strong>固定<br>
            <strong>光影：</strong><span style="color: #93c5fd;">冷蓝色顶光（左上）</span><br>
            <strong>声音：</strong>沉闷鼓点 <span style="color: #cbd5e1;">(情绪铺垫)</span><br>
            <strong>剪辑：</strong>此处切至下一个画面 <span style="color: #cbd5e1;">(情节转折)</span>
        </div>
        <div style="width: 45%; height: 180px; background: #262626; border: 1px solid #404040; border-radius: 8px; display:flex; align-items:center; justify-content:center; color:#a3a3a3;">[电影特写截图]</div>
    </div>

    <p>这听起来是不是很枯燥？</p>
    <p>是的，非常枯燥。 一部90分钟的电影，可能需要你花 10 个小时去拉片。<br>但为什么所有电影学院的学生、所有大导演，都要死磕这件事？</p>

    <h3>04 为什么要自讨苦吃？因为这是“偷师”的唯一捷径</h3>
    <p>拉片，本质上是一种<span class="hl-yellow">“逆向工程”</span>。</p>
    <p><span class="hl-blue">当你把经典电影拆解完之后，神奇的事情发生了——你获得了“导演的眼睛”。</span></p>

    <p>🔥 <strong class="text-orange" style="font-size: 1.1rem;">1. 你不再被剧情“欺骗”</strong></p>
    <p>以前你看恐怖片吓得半死。<br>现在你会想：“哦，这里用了一个<span class="text-hl">‘推镜头+不协和音程’</span>，导演在故意制造压迫感。”<br>你看穿了导演的把戏，你学会了这套把戏。</p>

    <p>🛠️ <strong class="text-purple" style="font-size: 1.1rem;">2. 你拥有了庞大的“素材库”</strong></p>
    <p>当你自己拍 Vlog、拍短视频，不知道怎么拍“两个人吃饭”时……<br>你脑子里会瞬间弹窗：“王家卫在《花样年华》里是<span class="text-hl">用这个角度拍吃饭的</span>，虽然我现在只有一台手机，但我可以模仿他的构图！”<br>你不再是凭感觉乱拍，你是胸有成竹。</p>

    <p>🧠 <strong class="text-hl" style="font-size: 1.1rem;">3. 你的审美将降维打击</strong></p>
    <p>你会发现，你拍出来的东西开始有了<span class="hl-yellow">“电影感”</span>。</p>
    <p><strong>所谓的电影感，不是加个滤镜那么简单。它是<span class="text-hl">节奏</span>、是<span class="text-hl">光线</span>、是<span class="text-hl">视听语言的语法</span>。</strong></p>
    <p>这些东西，只有通过拉片，才能刻进你的 DNA 里。</p>

    <h3>05 写在最后</h3>
    <p>有人问：学拉片有什么好处？能赚钱吗？</p>
    <p>如果你是视频创作者，它能让你的作品<span class="text-orange">从流水账变成“大片”</span>，涨粉变现自然水到渠成。<br>如果你只是普通影迷，它能让你打开新世界的大门。</p>
    <p>你会发现，以前你看电影只看到了表面的一层皮；学会拉片后，你看到了<span class="hl-yellow">骨骼、经络和灵魂</span>。</p>
    <p>从今天开始，试着挑一部你最爱的电影，别只带着眼睛，带上笔。<br>相信我，你会重新认识这部电影。</p>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 2：自己拉片</h2>

    <div class="callout callout-gray">
        <p style="margin-top: 0;">📺 <strong>观看直播回放：【视频拉片解说】</strong></p>
        <p>👨‍🏫 滋滋老师</p>
        <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/rYNX8h" target="_blank">https://fclive.pandacollege.cn/p/rYNX8h</a></p>
        <p style="margin-bottom: 0;">【学员笔记】： <a href="#">📄 滋滋老师：9月24日（周三）</a> <span style="color: #8f959e;">（by：皮皮咩同学）</span></p>
    </div>

    <h3>🛠️ 实操拉片：【工具使用+拉片】</h3>
    <p><strong>a. 工具：飞书表格</strong></p>
    
    <div class="img-placeholder">
        [截图：飞书表格工具使用界面演示]
    </div>

    <h3>🎬 参考：拉片 Excel 模板内容 -《浪浪山的小妖怪》开头部分</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="8%">镜号<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">时间<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">可以不写</span></th>
                    <th width="10%">景别<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">运镜<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="25%">画面内容<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写，可以简单写)</span></th>
                    <th width="13%">声音<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                    <th width="20%">新手分析重点<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>00:00 -<br>00:18</td>
                    <td>大远景 →<br>全景</td>
                    <td>垂直下摇<br>(Tilt Down)</td>
                    <td>开篇是云雾缭绕的高耸山峰，随着镜头慢慢向下移动，露出陡峭的山崖。片尾字幕出现。最后看见主角挑着担子走在山间小路上。</td>
                    <td>空灵、悠远的传统民乐（如笙或笛），伴随风声。</td>
                    <td>【交代环境】 利用<span class="text-hl">长镜头</span>和<span class="text-hl">巨大的高低落差</span>，展现山势的险峻和人的渺小，奠定一种古意、神秘的基调。</td>
                </tr>
                <tr>
                    <td align="center">2</td>
                    <td>00:19 -<br>00:21</td>
                    <td>全景<br>(Full Shot)</td>
                    <td>跟随<br>(Follow)</td>
                    <td>画面色调突变。主角挑着担子从亮处走进了一片漆黑幽蓝的树林。</td>
                    <td>音乐变得低沉，出现类似心跳或脚步的节奏声。</td>
                    <td>【氛围转折】 利用光影和颜色的<span class="text-orange">剧烈反差（白昼→蓝黑）</span>，暗示主角进入了危险或未知的领域（叙事分界点）。</td>
                </tr>
                <tr>
                    <td align="center">3</td>
                    <td>00:22 -<br>00:27</td>
                    <td>特写<br>(Close Up)</td>
                    <td>推进/晃动</td>
                    <td>镜头聚焦在主角脸上。他神情紧张，眼神左右飘忽，仿佛感觉到了什么。</td>
                    <td>音乐停止，突出环境的寂静，或只有沉重的呼吸声。</td>
                    <td>【刻画心理】 通过特写<span class="text-hl">放大面部表情</span>，让观众直接感受到主角的恐惧和不安。</td>
                </tr>
                <tr>
                    <td align="center">4</td>
                    <td>00:28 -<br>00:31</td>
                    <td>主观视点<br>/全景</td>
                    <td>固定/微动</td>
                    <td>画面展示了主角眼中的树林：树木扭曲、枯瘦，像鬼影一样。</td>
                    <td>诡异的风声或环境音效加强。</td>
                    <td>【主观视角】 这不仅仅是拍树，而是拍<span class="hl-yellow">“主角眼里的树”</span>。扭曲的树干外化了主角内心的恐惧。</td>
                </tr>
                <tr>
                    <td align="center">5</td>
                    <td>00:32 -<br>00:34</td>
                    <td>中景<br>(Medium Shot)</td>
                    <td>侧跟拍</td>
                    <td>主角继续前行，但他突然停步或迟疑，警惕地看向前方。</td>
                    <td>突然出现一声尖锐或异样的音效（提示危险临近）。</td>
                    <td>【动作反应】 通过人物的<span class="text-hl">停顿</span>，提示观众：前方有东西出现了。</td>
                </tr>
                <tr>
                    <td align="center">6</td>
                    <td>00:35 -<br>00:40</td>
                    <td>远景<br>(Long Shot)</td>
                    <td>固定镜头</td>
                    <td>树林深处，一块石头上蹲坐着一个黑色的剪影（类似狐狸或书生），背对着主角。</td>
                    <td>寂静，充满压迫感。</td>
                    <td>【悬念揭示】 利用<span class="text-purple">中心构图和剪影效果</span>，营造强烈的神秘感。观众和主角一样，都在猜测“那是什么？”</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 1：拉片-表格模板</p>
        <p>参考上边的表格，创建一个 Excel 表格文档，找一个很短很短的优秀片段，简单做个拉片分析；</p>
        <p><strong class="text-orange">至少分析 4 个镜头！</strong></p>
        <p>>> 提交到作业《补基础1123：拉片表格》：<br>
        <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank">https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf</a></p>
        
        <div style="background: #ffffff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="color: var(--text-muted); margin-top: 0; font-size: 0.95rem;"><em>如果你不知道要分析哪些视频，老师推荐 2 个最佳获奖短片：</em></p>
            <p style="margin-bottom: 5px; font-size: 0.95rem;">🎬 <em>《暴雪南风》：<a href="https://www.bilibili.com/video/BV1XZ4y1q7QN/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
            <p style="margin-bottom: 0; font-size: 0.95rem;">🎬 <em>奥斯卡动画短片《鹬》：<a href="https://www.bilibili.com/video/BV1BZ4y1H79N/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
        </div>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 3：看别人拉片子</h2>
    <p>第92届奥斯卡颁奖典礼公布了所有获奖的作品。在众多获奖者中，韩国导演<strong class="text-hl">奉俊昊</strong>以及其执导的电影<strong class="text-hl">《寄生虫》</strong>，一举获得包含“奥斯卡最佳影片”“最佳国际影片”“最佳剧本”“最佳导演”在内的四个含金量极高的奖项。</p>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 2：11月30日，周日前完成（无需提交）</p>
        <p style="margin-bottom: 0;"><strong>《寄生虫》拉片分析</strong>，观看地址：<a href="https://www.bilibili.com/video/BV1w84y1n7yG/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></p>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🚩 选修：视听语言入门基础</h2>

    <div class="img-placeholder" style="padding: 100px 20px;">
        [视频封面图：AI 影像课程 - 1]
    </div>

    <h3>📖 视听语言的拆解 —— 像学一门外语一样学影像</h3>
    
    <ol style="background: #f8f9fa; padding: 25px 25px 25px 45px; border-radius: 8px;">
        <li style="margin-bottom: 20px;"><strong>理论基石：电影符号学（麦茨）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>核心观点：</strong>视听语言是一种“语言”，有其基本的构成单位、语法和修辞。我们学习它，就是在学习<span class="hl-green">如何与观众进行非言语的、情感和意义的沟通</span>。</li>
            </ul>
        </li>
        <li style="margin-bottom: 20px;"><strong>视听语言的三大构成（与语言学类比）：</strong>
            <ul style="margin-top: 10px;">
                <li><strong class="text-hl">视听元素</strong> (构图、镜头、光线、色彩、声音) = <strong>字/词</strong> (Vocabulary)</li>
                <li><strong class="text-hl">场面调度</strong> (演员、道具、环境的安排) = <strong>语境</strong> (Context)</li>
                <li><strong class="text-hl">剪辑</strong> (镜头的组接与节奏) = <strong>语法与修辞</strong> (Grammar & Rhetoric)</li>
            </ul>
        </li>
        <li><strong>教学方法：追溯“电影史上的第一次”（案例教学）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>运镜：</strong>史上第一个移动镜头<span class="hl-yellow">（船上拍运河）</span>，理解“动态”带来的突破。</li>
                <li><strong>镜头：</strong>史上第一个特写镜头<span class="hl-yellow">《祖母的放大镜》</span>，理解“景别”带来的情感冲击。</li>
                <li><strong>声音：</strong>史上第一部有声电影<span class="hl-yellow">《爵士歌手》</span>，理解“声音”如何改变叙事。</li>
                <li><strong>色彩：</strong>史上第一部彩色片《浮华世界》与色彩运用典范《红色沙漠》，理解“色彩”的情绪表达力。</li>
                <li><strong>剪辑：</strong>
                    <ul style="list-style-type: square;">
                        <li>第一次“剪”：梅里爱《消失的女子》（停机再拍），理解<span class="text-orange">剪辑的魔术性</span>。</li>
                        <li>第一次“辑”：鲍特《消防员的生活》（多场景组接），理解<span class="text-orange">剪辑的叙事功能</span>。</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h3>📺 视听语言的案例演示</h3>
    
    <div class="callout callout-gray" style="margin-bottom: 15px;">
        <p style="margin: 0;">🎬 <strong>直播回放：<a href="#">视听语言课入门</a></strong></p>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="25%">案例赏析</th>
                    <th width="25%">出图小技巧</th>
                    <th width="25%">suno 音乐小技巧</th>
                    <th width="25%">视频镜头的设计思路</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p style="margin-top:0;"><strong>1小时爱情反转 AI 音乐 MV</strong></p>
                        <p style="color: #64748b; font-size: 0.9rem;">江西省政府与上市集团的影视集群园区合作</p>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>MJ 里如何<span class="text-hl">控制角色一致性</span>？</li>
                            <li>大力宗：MJ 如何一次性<span class="text-hl">批量出几十上百张图</span>？</li>
                            <li>绝妙的同构图设计，即梦是如何实现的？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>王菲风格、萨顶顶风格的音乐，怎么写？</li>
                            <li><span class="text-purple">歌词押韵</span>怎么做？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>四段式的镜头空间关系</li>
                            <li><strong>创作思维：</strong>整段视频的故事性主题，视频镜头应如何设计和串联</li>
                            <li><span class="text-orange">快闪镜头</span>的技巧和应用</li>
                        </ol>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</body>
</html>`.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]||`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社团基础：视听语言-拉片小手册</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <style>
        /* 还原飞书文档风格的 UI 变量 */
        :root {
            --bg-color: #ffffff;
            --text-main: #1f2329;
            --text-muted: #8f959e;
            --link-color: #3370ff;
            --border-color: #dee0e3;
            --callout-bg-orange: #fff7e8;
            --callout-bg-blue: #f0f4ff;
            --callout-bg-gray: #f4f5f9;
            --hl-blue: #e1eaff;
            --hl-green: #d1f2e6;
            --table-header-bg: #f4f5f9;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #f7f8fa; /* 网页底色 */
            color: var(--text-main);
            line-height: 1.85;
            margin: 0;
            padding: 40px 15px;
        }

        .feishu-container {
            max-width: 900px;
            margin: 0 auto;
            background-color: var(--bg-color);
            padding: 50px 60px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        /* 标题系统 */
        h1 {
            font-size: 2.2rem;
            font-weight: 900;
            margin-top: 0;
            margin-bottom: 40px;
            color: #1f2329;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 20px;
        }
        h2 {
            font-size: 1.55rem;
            font-weight: 800;
            margin-top: 50px;
            margin-bottom: 25px;
            color: #1f2329;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 15px;
            color: #1f2329;
        }

        p {
            margin: 14px 0;
            color: #333333;
        }

        a {
            color: var(--link-color);
            text-decoration: none;
            word-break: break-all;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }

        /* ✨ 关键词高亮系统 (优化核心) */
        strong {
            font-weight: 700;
            color: #1f2329;
        }
        .hl-blue {
            background-color: var(--hl-blue);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: var(--link-color);
        }
        .hl-green {
            background-color: var(--hl-green);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: #047857;
        }
        /* 荧光笔涂抹效果 */
        .hl-yellow {
            background-image: linear-gradient(transparent 60%, rgba(253, 224, 71, 0.8) 60%);
            font-weight: 800;
            color: #1f2329;
            padding: 0 4px;
            border-radius: 2px;
        }
        /* 文本主题色加粗 */
        .text-hl {
            color: var(--link-color);
            font-weight: 800;
        }
        .text-orange {
            color: #ff7d00;
            font-weight: 800;
        }
        .text-purple {
            color: #7b61ff;
            font-weight: 800;
        }

        /* 引用块 */
        .quote-block {
            border-left: 4px solid var(--link-color);
            background: #f8f9fa;
            padding: 15px 20px;
            color: #4a4a4a;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
            font-size: 1.05rem;
        }

        /* 任务/提示卡片 (Callout) */
        .callout {
            padding: 20px 25px;
            border-radius: 8px;
            margin: 25px 0;
            border: 1px solid transparent;
        }
        .callout-orange {
            background-color: var(--callout-bg-orange);
            border-color: #ffd6a5;
        }
        .callout-blue {
            background-color: var(--callout-bg-blue);
            border-color: #c2d1ff;
        }
        .callout-gray {
            background-color: var(--callout-bg-gray);
            border-color: var(--border-color);
        }

        /* 列表优化 */
        ul {
            padding-left: 25px;
            margin: 15px 0;
        }
        ul li {
            margin-bottom: 12px;
        }

        /* 表格样式优化 */
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }
        th, td {
            border-bottom: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            padding: 16px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: var(--table-header-bg);
            font-weight: 800;
            color: #1f2329;
            text-align: center;
        }
        td {
            color: #333333;
        }
        tr:last-child td { border-bottom: none; }
        td:last-child, th:last-child { border-right: none; }

        /* 模拟图片占位图 */
        .img-placeholder {
            background-color: #f4f5f9;
            border: 1px dashed #bbbfc4;
            border-radius: 8px;
            text-align: center;
            color: var(--text-muted);
            padding: 60px 20px;
            margin: 25px 0;
            font-size: 0.95rem;
        }

        /* 专属黑底文字图模拟 */
        .black-img-mock {
            background-color: #141414;
            color: #f4f5f9;
            padding: 30px;
            border-radius: 12px;
            margin: 25px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .black-img-text {
            font-size: 1.05rem;
            line-height: 2.2;
        }
        .black-img-text strong {
            font-size: 1.15rem;
            color: #fff;
        }

        @media (max-width: 768px) {
            .feishu-container {
                padding: 30px 20px;
            }
            h1 { font-size: 1.8rem; }
            h2 { font-size: 1.4rem; }
            .black-img-mock { flex-direction: column; align-items: flex-start; gap: 20px; }
            .black-img-mock > div:last-child { width: 100% !important; }
        }
    </style>
</head>
<body>

<div class="feishu-container">

    <h1>社团基础：视听语言-拉片小手册</h1>

    <h2>🎯 补课任务 1：认识拉片</h2>

    <p>做了1000个小视频，为什么你还做不出一个<span class="text-hl">电影高级感</span>的片子？</p>

    <div class="callout callout-orange">
        <p style="margin: 0; font-size: 1.1rem; color: #b45309;">🎈 <em>在这里，读懂影像的秘密</em></p>
    </div>

    <h3>01 你真的“看懂”电影了吗？</h3>
    <p>我们先来做一个思想实验：</p>
    <p>如果你去米其林餐厅吃了一千顿饭，你觉得自己能成为特级厨师吗？<br>大概率不能。你只会成为一个<span class="text-orange">挑剔的美食家</span>。</p>
    
    <p>同样的道理：<br><strong>如果你在 Netflix 或电影院看了一千部电影，你能成为导演（哪怕是拍好 Vlog 的博主）吗？</strong><br>也不能。</p>
    
    <p>❌ 观众看电影，是在<span class="hl-yellow">“消费”情感</span>。<br>你会哭、会笑、会紧张，完全被剧情牵着鼻子走。</p>
    
    <p>✅ 创作者看电影，是在<span class="hl-yellow">“解剖”技术</span>。<br>他们冷酷无情，他们不再关心主角会不会死，他们只关心——<span class="hl-blue">刚才那个镜头，为什么要用广角？</span></p>
    
    <p>想从“吃货”变成“厨师”，你需要掌握一项核心技能。<br>在电影圈，它有一个听起来很复古的名字——<strong class="text-hl" style="font-size: 1.2rem;">「拉片」</strong>。</p>

    <div class="img-placeholder">
        [图片：这才这是电影真正的样子（胶片背景图）]
    </div>

    <h3>02 什么是“拉片”？Lā Piàn</h3>
    <p>“拉片”这个词，听起来很物理。</p>
    <p>它的确源于物理动作：在胶片时代，剪辑师需要在剪辑台上，<span class="text-hl">用手拉动胶片，一格一格地审视画面</span>。</p>
    <p>放到今天，拉片的定义非常简单粗暴：</p>
    
    <div class="quote-block">
        <strong>把一部电影彻底“拆”开。</strong><br>
        不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影<span class="text-orange">拆解成几百、上千个独立的镜头</span>。
    </div>

    <p>如果说看电影是欣赏一座宏伟的建筑，<span class="hl-blue">那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</span></p>

    <h3>03 拉片，到底在“拉”什么？</h3>
    <p>当你开始拉片，你的手边不再是爆米花，而是 <strong class="text-hl">Excel 表格</strong>。</p>
    <p>你需要<span class="hl-yellow">像做手术一样</span>，记录下每一个镜头的详细参数：</p>
    
    <ul style="list-style-type: none; padding-left: 0; background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <li>📏 <strong class="text-hl">景别：</strong>是怼脸的特写，还是宏大的远景？</li>
        <li>🎥 <strong class="text-hl">运镜：</strong>摄像机是推拉摇移，还是稳如泰山？</li>
        <li>💡 <strong class="text-hl">光影：</strong>光是从哪打过来的？是冷酷的蓝还是温暖的黄？</li>
        <li>🔊 <strong class="text-hl">声音：</strong>这里为什么要加一声沉闷的鼓点？</li>
        <li>✂️ <strong class="text-hl">剪辑：</strong>为什么在这个瞬间切到了下一个画面？</li>
    </ul>

    <!-- 黑底画面解析模拟 -->
    <div class="black-img-mock">
        <div class="black-img-text">
            <strong>景别：</strong>特写<br>
            <strong>运镜：</strong>固定<br>
            <strong>光影：</strong><span style="color: #93c5fd;">冷蓝色顶光（左上）</span><br>
            <strong>声音：</strong>沉闷鼓点 <span style="color: #cbd5e1;">(情绪铺垫)</span><br>
            <strong>剪辑：</strong>此处切至下一个画面 <span style="color: #cbd5e1;">(情节转折)</span>
        </div>
        <div style="width: 45%; height: 180px; background: #262626; border: 1px solid #404040; border-radius: 8px; display:flex; align-items:center; justify-content:center; color:#a3a3a3;">[电影特写截图]</div>
    </div>

    <p>这听起来是不是很枯燥？</p>
    <p>是的，非常枯燥。 一部90分钟的电影，可能需要你花 10 个小时去拉片。<br>但为什么所有电影学院的学生、所有大导演，都要死磕这件事？</p>

    <h3>04 为什么要自讨苦吃？因为这是“偷师”的唯一捷径</h3>
    <p>拉片，本质上是一种<span class="hl-yellow">“逆向工程”</span>。</p>
    <p><span class="hl-blue">当你把经典电影拆解完之后，神奇的事情发生了——你获得了“导演的眼睛”。</span></p>

    <p>🔥 <strong class="text-orange" style="font-size: 1.1rem;">1. 你不再被剧情“欺骗”</strong></p>
    <p>以前你看恐怖片吓得半死。<br>现在你会想：“哦，这里用了一个<span class="text-hl">‘推镜头+不协和音程’</span>，导演在故意制造压迫感。”<br>你看穿了导演的把戏，你学会了这套把戏。</p>

    <p>🛠️ <strong class="text-purple" style="font-size: 1.1rem;">2. 你拥有了庞大的“素材库”</strong></p>
    <p>当你自己拍 Vlog、拍短视频，不知道怎么拍“两个人吃饭”时……<br>你脑子里会瞬间弹窗：“王家卫在《花样年华》里是<span class="text-hl">用这个角度拍吃饭的</span>，虽然我现在只有一台手机，但我可以模仿他的构图！”<br>你不再是凭感觉乱拍，你是胸有成竹。</p>

    <p>🧠 <strong class="text-hl" style="font-size: 1.1rem;">3. 你的审美将降维打击</strong></p>
    <p>你会发现，你拍出来的东西开始有了<span class="hl-yellow">“电影感”</span>。</p>
    <p><strong>所谓的电影感，不是加个滤镜那么简单。它是<span class="text-hl">节奏</span>、是<span class="text-hl">光线</span>、是<span class="text-hl">视听语言的语法</span>。</strong></p>
    <p>这些东西，只有通过拉片，才能刻进你的 DNA 里。</p>

    <h3>05 写在最后</h3>
    <p>有人问：学拉片有什么好处？能赚钱吗？</p>
    <p>如果你是视频创作者，它能让你的作品<span class="text-orange">从流水账变成“大片”</span>，涨粉变现自然水到渠成。<br>如果你只是普通影迷，它能让你打开新世界的大门。</p>
    <p>你会发现，以前你看电影只看到了表面的一层皮；学会拉片后，你看到了<span class="hl-yellow">骨骼、经络和灵魂</span>。</p>
    <p>从今天开始，试着挑一部你最爱的电影，别只带着眼睛，带上笔。<br>相信我，你会重新认识这部电影。</p>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 2：自己拉片</h2>

    <div class="callout callout-gray">
        <p style="margin-top: 0;">📺 <strong>观看直播回放：【视频拉片解说】</strong></p>
        <p>👨‍🏫 滋滋老师</p>
        <p>🎬 直播回放：<a href="https://fclive.pandacollege.cn/p/rYNX8h" target="_blank">https://fclive.pandacollege.cn/p/rYNX8h</a></p>
        <p style="margin-bottom: 0;">【学员笔记】： <a href="#">📄 滋滋老师：9月24日（周三）</a> <span style="color: #8f959e;">（by：皮皮咩同学）</span></p>
    </div>

    <h3>🛠️ 实操拉片：【工具使用+拉片】</h3>
    <p><strong>a. 工具：飞书表格</strong></p>
    
    <div class="img-placeholder">
        [截图：飞书表格工具使用界面演示]
    </div>

    <h3>🎬 参考：拉片 Excel 模板内容 -《浪浪山的小妖怪》开头部分</h3>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="8%">镜号<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">时间<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">可以不写</span></th>
                    <th width="10%">景别<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="12%">运镜<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写)</span></th>
                    <th width="25%">画面内容<br><span style="color:#3370ff;font-weight:normal;font-size:0.85rem;">(必写，可以简单写)</span></th>
                    <th width="13%">声音<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                    <th width="20%">新手分析重点<br><span style="color:#8f959e;font-weight:normal;font-size:0.85rem;">(建议写)</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>00:00 -<br>00:18</td>
                    <td>大远景 →<br>全景</td>
                    <td>垂直下摇<br>(Tilt Down)</td>
                    <td>开篇是云雾缭绕的高耸山峰，随着镜头慢慢向下移动，露出陡峭的山崖。片尾字幕出现。最后看见主角挑着担子走在山间小路上。</td>
                    <td>空灵、悠远的传统民乐（如笙或笛），伴随风声。</td>
                    <td>【交代环境】 利用<span class="text-hl">长镜头</span>和<span class="text-hl">巨大的高低落差</span>，展现山势的险峻和人的渺小，奠定一种古意、神秘的基调。</td>
                </tr>
                <tr>
                    <td align="center">2</td>
                    <td>00:19 -<br>00:21</td>
                    <td>全景<br>(Full Shot)</td>
                    <td>跟随<br>(Follow)</td>
                    <td>画面色调突变。主角挑着担子从亮处走进了一片漆黑幽蓝的树林。</td>
                    <td>音乐变得低沉，出现类似心跳或脚步的节奏声。</td>
                    <td>【氛围转折】 利用光影和颜色的<span class="text-orange">剧烈反差（白昼→蓝黑）</span>，暗示主角进入了危险或未知的领域（叙事分界点）。</td>
                </tr>
                <tr>
                    <td align="center">3</td>
                    <td>00:22 -<br>00:27</td>
                    <td>特写<br>(Close Up)</td>
                    <td>推进/晃动</td>
                    <td>镜头聚焦在主角脸上。他神情紧张，眼神左右飘忽，仿佛感觉到了什么。</td>
                    <td>音乐停止，突出环境的寂静，或只有沉重的呼吸声。</td>
                    <td>【刻画心理】 通过特写<span class="text-hl">放大面部表情</span>，让观众直接感受到主角的恐惧和不安。</td>
                </tr>
                <tr>
                    <td align="center">4</td>
                    <td>00:28 -<br>00:31</td>
                    <td>主观视点<br>/全景</td>
                    <td>固定/微动</td>
                    <td>画面展示了主角眼中的树林：树木扭曲、枯瘦，像鬼影一样。</td>
                    <td>诡异的风声或环境音效加强。</td>
                    <td>【主观视角】 这不仅仅是拍树，而是拍<span class="hl-yellow">“主角眼里的树”</span>。扭曲的树干外化了主角内心的恐惧。</td>
                </tr>
                <tr>
                    <td align="center">5</td>
                    <td>00:32 -<br>00:34</td>
                    <td>中景<br>(Medium Shot)</td>
                    <td>侧跟拍</td>
                    <td>主角继续前行，但他突然停步或迟疑，警惕地看向前方。</td>
                    <td>突然出现一声尖锐或异样的音效（提示危险临近）。</td>
                    <td>【动作反应】 通过人物的<span class="text-hl">停顿</span>，提示观众：前方有东西出现了。</td>
                </tr>
                <tr>
                    <td align="center">6</td>
                    <td>00:35 -<br>00:40</td>
                    <td>远景<br>(Long Shot)</td>
                    <td>固定镜头</td>
                    <td>树林深处，一块石头上蹲坐着一个黑色的剪影（类似狐狸或书生），背对着主角。</td>
                    <td>寂静，充满压迫感。</td>
                    <td>【悬念揭示】 利用<span class="text-purple">中心构图和剪影效果</span>，营造强烈的神秘感。观众和主角一样，都在猜测“那是什么？”</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 1：拉片-表格模板</p>
        <p>参考上边的表格，创建一个 Excel 表格文档，找一个很短很短的优秀片段，简单做个拉片分析；</p>
        <p><strong class="text-orange">至少分析 4 个镜头！</strong></p>
        <p>>> 提交到作业《补基础1123：拉片表格》：<br>
        <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank">https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf</a></p>
        
        <div style="background: #ffffff; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="color: var(--text-muted); margin-top: 0; font-size: 0.95rem;"><em>如果你不知道要分析哪些视频，老师推荐 2 个最佳获奖短片：</em></p>
            <p style="margin-bottom: 5px; font-size: 0.95rem;">🎬 <em>《暴雪南风》：<a href="https://www.bilibili.com/video/BV1XZ4y1q7QN/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
            <p style="margin-bottom: 0; font-size: 0.95rem;">🎬 <em>奥斯卡动画短片《鹬》：<a href="https://www.bilibili.com/video/BV1BZ4y1H79N/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></em></p>
        </div>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🎯 补课任务 3：看别人拉片子</h2>
    <p>第92届奥斯卡颁奖典礼公布了所有获奖的作品。在众多获奖者中，韩国导演<strong class="text-hl">奉俊昊</strong>以及其执导的电影<strong class="text-hl">《寄生虫》</strong>，一举获得包含“奥斯卡最佳影片”“最佳国际影片”“最佳剧本”“最佳导演”在内的四个含金量极高的奖项。</p>

    <div class="callout callout-blue">
        <p style="color: #3370ff; font-weight: 800; font-size: 1.15rem; margin-top: 0;">🎈 作业 2：11月30日，周日前完成（无需提交）</p>
        <p style="margin-bottom: 0;"><strong>《寄生虫》拉片分析</strong>，观看地址：<a href="https://www.bilibili.com/video/BV1w84y1n7yG/?spm_id_from=333.337.search-card.all.click&vd_source=2cd6a2c3beef469d51e95258f7a0724f" target="_blank">点击前往 Bilibili 观看</a></p>
    </div>

    <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 50px 0;">

    <h2>🚩 选修：视听语言入门基础</h2>

    <div class="img-placeholder" style="padding: 100px 20px;">
        [视频封面图：AI 影像课程 - 1]
    </div>

    <h3>📖 视听语言的拆解 —— 像学一门外语一样学影像</h3>
    
    <ol style="background: #f8f9fa; padding: 25px 25px 25px 45px; border-radius: 8px;">
        <li style="margin-bottom: 20px;"><strong>理论基石：电影符号学（麦茨）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>核心观点：</strong>视听语言是一种“语言”，有其基本的构成单位、语法和修辞。我们学习它，就是在学习<span class="hl-green">如何与观众进行非言语的、情感和意义的沟通</span>。</li>
            </ul>
        </li>
        <li style="margin-bottom: 20px;"><strong>视听语言的三大构成（与语言学类比）：</strong>
            <ul style="margin-top: 10px;">
                <li><strong class="text-hl">视听元素</strong> (构图、镜头、光线、色彩、声音) = <strong>字/词</strong> (Vocabulary)</li>
                <li><strong class="text-hl">场面调度</strong> (演员、道具、环境的安排) = <strong>语境</strong> (Context)</li>
                <li><strong class="text-hl">剪辑</strong> (镜头的组接与节奏) = <strong>语法与修辞</strong> (Grammar & Rhetoric)</li>
            </ul>
        </li>
        <li><strong>教学方法：追溯“电影史上的第一次”（案例教学）</strong>
            <ul style="margin-top: 10px;">
                <li><strong>运镜：</strong>史上第一个移动镜头<span class="hl-yellow">（船上拍运河）</span>，理解“动态”带来的突破。</li>
                <li><strong>镜头：</strong>史上第一个特写镜头<span class="hl-yellow">《祖母的放大镜》</span>，理解“景别”带来的情感冲击。</li>
                <li><strong>声音：</strong>史上第一部有声电影<span class="hl-yellow">《爵士歌手》</span>，理解“声音”如何改变叙事。</li>
                <li><strong>色彩：</strong>史上第一部彩色片《浮华世界》与色彩运用典范《红色沙漠》，理解“色彩”的情绪表达力。</li>
                <li><strong>剪辑：</strong>
                    <ul style="list-style-type: square;">
                        <li>第一次“剪”：梅里爱《消失的女子》（停机再拍），理解<span class="text-orange">剪辑的魔术性</span>。</li>
                        <li>第一次“辑”：鲍特《消防员的生活》（多场景组接），理解<span class="text-orange">剪辑的叙事功能</span>。</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h3>📺 视听语言的案例演示</h3>
    
    <div class="callout callout-gray" style="margin-bottom: 15px;">
        <p style="margin: 0;">🎬 <strong>直播回放：<a href="#">视听语言课入门</a></strong></p>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th width="25%">案例赏析</th>
                    <th width="25%">出图小技巧</th>
                    <th width="25%">suno 音乐小技巧</th>
                    <th width="25%">视频镜头的设计思路</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p style="margin-top:0;"><strong>1小时爱情反转 AI 音乐 MV</strong></p>
                        <p style="color: #64748b; font-size: 0.9rem;">江西省政府与上市集团的影视集群园区合作</p>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>MJ 里如何<span class="text-hl">控制角色一致性</span>？</li>
                            <li>大力宗：MJ 如何一次性<span class="text-hl">批量出几十上百张图</span>？</li>
                            <li>绝妙的同构图设计，即梦是如何实现的？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>王菲风格、萨顶顶风格的音乐，怎么写？</li>
                            <li><span class="text-purple">歌词押韵</span>怎么做？</li>
                        </ol>
                    </td>
                    <td>
                        <ol style="padding-left: 15px; margin: 0;">
                            <li>四段式的镜头空间关系</li>
                            <li><strong>创作思维：</strong>整段视频的故事性主题，视频镜头应如何设计和串联</li>
                            <li><span class="text-orange">快闪镜头</span>的技巧和应用</li>
                        </ol>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</body>
</html>`).replace(/<div class="black-img-text">[\s\S]*?<\/div>\s*/i,``).replace(`[电影特写截图]`,`<img src="${te}" alt="电影特写截图" style="width:100%;height:auto;object-fit:contain;border-radius:8px;display:block;" />`).replace(`[图片：这才这是电影真正的样子（胶片背景图）]`,`<img src="${j}" alt="这才是电影真正的样子" style="width:100%;height:auto;display:block;border-radius:8px;" />`).replace(`[截图：飞书表格工具使用界面演示]`,`<video src="https://res.pandateacher.com/IKOEODJP1777028940023.mp4" controls preload="metadata" style="width:100%;height:auto;display:block;border-radius:8px;background:#000;object-fit:contain;"></video>`).replace(`[视频封面图：AI 影像课程 - 1]`,`<div style="background:#ffffff;border:1px solid #c2d1ff;border-left:4px solid #3370ff;border-radius:10px;padding:18px 20px;">
      <p style="margin:0 0 10px 0;color:#1f2329;font-size:1.05rem;font-weight:800;">📚 课程学习资料</p>
      <p style="margin:0;color:#475569;line-height:1.8;">
        直播回放：
        <a href="https://fclive.pandacollege.cn/s/1OZUz" target="_blank" rel="noopener" style="color:#3370ff;font-weight:700;text-decoration:none;border-bottom:1px dashed #93c5fd;">
          https://fclive.pandacollege.cn/s/1OZUz
        </a>
      </p>
    </div>`),P=`
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
`,F=e=>`${P}
${M}
<div class="week4-lapian-wrap">
${e}
</div>`,I=`<h2>🎯 补课任务 3：看别人拉片子</h2>`,L=`<h2>🎯 你有没有看过《寄生虫》的拉片？</h2>`,R=`🎈 作业 2：11月30日，周日前完成（无需提交）`,z=`🎈 强烈推荐观看，了解一部好的片子，到底好在哪`,B=`<h2>🚩 选修：视听语言入门基础</h2>`,V=N.indexOf(I),ne=V>=0?N.slice(0,V):N,H=V>=0?N.slice(V).replace(I,L).replace(R,z):`<h2>🎯 补课任务 3：看别人拉片子</h2><p>暂无内容，请稍后补充。</p>`,U=H.indexOf(B),re=U>=0?H.slice(0,U):H,W=U>=0?H.slice(U):`<h2>🚩 选修：视听语言入门基础</h2><p>暂无内容，请稍后补充。</p>`,G=W.indexOf(`<h3>📺 视听语言的案例演示</h3>`),ie=G>=0?W.slice(0,G):W,ae=G>=0?W.slice(G+21):`<p>暂无内容，请稍后补充。</p>`,K=[{id:`week4-chapter1`,number:1,title:`第1课：视听语言-拉片小手册`,icon:`🎞`,customHtml:F(ne),chapterTask:{description:`我已完成第1课学习，并开始尝试拉片分析`}},{id:`week4-chapter2`,number:2,title:`第2课：看别人拉片`,icon:`🎬`,customHtml:F(re),chapterTask:{description:`我已完成第2课学习，并复盘优秀拉片案例`}},{id:`week4-chapter3`,number:3,title:`第3课：菩萨老师来夯实你的视听语言入门基础`,icon:`📘`,customHtml:F(ie),chapterTask:{description:`我已完成第3课学习视听语言入门基础`}},{id:`week4-chapter4`,number:4,title:`第4课：公开课-《7小时完成6位数AI视频商单全解密》`,icon:`🎤`,customHtml:F(ae),chapterTask:{description:`我已完成第4课学习，并理解公开课中的商单方法`}}],oe={class:`progress-ring-container`},se=[`width`,`height`],ce=[`r`,`cx`,`cy`,`stroke`,`stroke-width`],le=[`r`,`cx`,`cy`,`stroke`,`stroke-width`,`stroke-dasharray`,`stroke-dashoffset`],ue=h({__name:`ProgressRing`,props:{percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},size:{type:Number,default:60},strokeWidth:{type:Number,default:4},color:{type:String,default:`#1890ff`},backgroundColor:{type:String,default:`#e9ecef`}},setup(e){let t=e,n=l(()=>t.size/2),r=l(()=>(t.size-t.strokeWidth)/2),i=l(()=>2*Math.PI*r.value),s=l(()=>{let e=t.percentage/100;return i.value*(1-e)}),c=l(()=>Math.round(t.percentage)),d=l(()=>`${t.size*.25}px`);return(t,l)=>(g(),u(`div`,oe,[(g(),u(`svg`,{width:e.size,height:e.size,class:`progress-ring`},[p(`circle`,{class:`progress-ring-bg`,r:r.value,cx:n.value,cy:n.value,fill:`transparent`,stroke:e.backgroundColor,"stroke-width":e.strokeWidth},null,8,ce),p(`circle`,{class:`progress-ring-fill`,r:r.value,cx:n.value,cy:n.value,fill:`transparent`,stroke:e.color,"stroke-width":e.strokeWidth,"stroke-dasharray":i.value,"stroke-dashoffset":s.value,"stroke-linecap":`round`,style:{transition:`stroke-dashoffset 0.5s ease`}},null,8,le)],8,se)),p(`div`,{class:`progress-text`,style:a({fontSize:d.value})},o(c.value)+`% `,5)]))}},[[`__scopeId`,`data-v-095d4261`]]),de={class:`home-page`},fe={class:`home-layout`},pe={class:`home-main`},me={class:`progress-dashboard card`},he={class:`dashboard-header`},ge={class:`progress-stats`},_e={class:`stats-text`},ve={class:`stats-percentage`},ye={class:`progress-bar-large`},be={class:`dashboard-actions`},xe={class:`courses`},Se={class:`course-list`},Ce=[`onClick`],we={class:`course-icon-wrapper`},Te={class:`course-icon`},Ee={class:`course-content`},De={key:0,class:`course-skills`},Oe={class:`course-meta`},ke={class:`lesson-count`},Ae={class:`week-progress`},je={class:`bonus-collection card`},Me={class:`bonus-header`},Ne={class:`bonus-count`},Pe={key:0,class:`bonus-list`},Fe=[`href`],Ie={class:`bonus-doc-body`},Le={key:1,class:`bonus-empty`},Re=h({__name:`Home`,setup(e){let t=s(),r=O(),f=k(),m=[`week2-chapter1`],ee=[`chapter8`,`chapter10`,`chapter9`],h=K.map(e=>e.id),v=l(()=>j.value.percentage),y=l(()=>r.lastAccessedLesson),b=l(()=>[`chapter1`,`chapter2`,`chapter3`].filter(e=>A.some(t=>t.id===e))),x=l(()=>[`chapter4`,`chapter5`].filter(e=>A.some(t=>t.id===e))),S=l(()=>{let e=[];return T.forEach(t=>{t.id===`week1`?e.push({...t,lessonLabel:`${b.value.length} 课时`}):e.push(t),t.id===`week1`&&e.push({id:`week1-part2`,baseWeekId:`week1`,icon:`📸`,title:`第1周：新手入门基础篇（下）`,description:`掌握AI视频创作的核心底蕴：出图`,skills:[`摄影基础`,`提示词`,`画面构图`],lessonLabel:`${x.value.length} 课时`,virtual:!0,targetChapterId:`chapter4`})}),e}),C=l(()=>{let e=[`chapter8`,`chapter10`,`chapter9`];return[...A.map(e=>({weekId:`week1`,chapter:e})),...e.map(e=>A.find(t=>t.id===e)).filter(Boolean).map(e=>({weekId:`week3`,chapter:e})),...K.map(e=>({weekId:`week4`,chapter:e}))]}),w=l(()=>{let e=new Map;return f.unlockedBonusDocuments.forEach(t=>{e.set(t.id,t)}),C.value.forEach(({weekId:t,chapter:n})=>{if(!n.bonusDocument?.url)return;let r=f.getWeekProgress(t),i=r.chapters?.[n.id]?.completedAt;if(!r.chapters?.[n.id]?.completed)return;let a=`${t}-${n.id}`;e.has(a)||e.set(a,{id:a,weekId:t,chapterId:n.id,title:n.bonusDocument.title||`彩蛋文档`,description:n.bonusDocument.description||``,url:n.bonusDocument.url,sourceTitle:n.title,unlockedAt:i||new Date(0).toISOString()})}),Array.from(e.values()).filter(e=>e?.url).sort((e,t)=>new Date(e.unlockedAt||0)-new Date(t.unlockedAt||0))}),E=e=>e.id===`week1`?b.value:e.id===`week1-part2`?x.value:e.id===`week2`?m:e.id===`week3`?ee:e.id===`week4`?h:[],D=e=>{let t=e.baseWeekId||e.id,n=E(e),r=f.getWeekProgress(t);return n.filter(e=>r.chapters?.[e]?.completed).length},te=e=>{let t=E(e);return t.length>0?t.length:Array.isArray(e.lessons)?e.lessons.length:0},j=l(()=>{let e=S.value,t=0,n=0;return e.forEach(e=>{let r=E(e);t+=r.length,n+=D(e)}),{total:t,completed:n,percentage:t>0?n/t*100:0}}),M=e=>P(e.baseWeekId||e.id,E(e)),N=e=>M(e)>=100,P=(e,t)=>{let n=f.getWeekProgress(e),r=t.filter(e=>n.chapters?.[e]?.completed).length;return t.length?r/t.length*100:0},F=e=>({week1:`var(--week1-gradient)`,week2:`var(--week2-gradient)`,week3:`var(--week3-gradient)`,week4:`var(--week4-gradient)`})[e]||`var(--week1-gradient)`,I=e=>({week1:`var(--week1-color)`,week2:`var(--week2-color)`,week3:`var(--week3-color)`,week4:`var(--week4-color)`})[e]||`var(--week1-color)`,L=()=>{if(y.value){if(y.value.weekId===`week1`){let e=f.getWeekProgress(`week1`).currentChapter||``,n=[`chapter4`,`chapter5`,`chapter6`,`chapter7`].includes(e);t.push(`/week1/lesson?part=${n?`lower`:`upper`}`);return}t.push(`/${y.value.weekId}/lesson`)}},R=()=>{t.push(`/week1/lesson?part=upper`)},z=e=>{if(e===`week1`){t.push(`/week1/lesson?part=upper`);return}t.push(`/${e}/lesson`)},B=e=>{if(e.virtual&&e.baseWeekId&&e.targetChapterId){f.setCurrentChapter(e.baseWeekId,e.targetChapterId),t.push(`/${e.baseWeekId}/lesson?part=lower`);return}z(e.id)};return(e,t)=>(g(),u(`div`,de,[t[6]||=p(`header`,{class:`hero`},[p(`h1`,null,`🎓 风变野菩萨AI视频社团`),p(`p`,null,`新手入门学习路径`)],-1),p(`div`,fe,[p(`div`,pe,[p(`div`,me,[p(`div`,he,[t[0]||=p(`h2`,null,`📊 学习进度`,-1),p(`div`,ge,[p(`span`,_e,o(j.value.completed)+`/`+o(j.value.total)+` 课时`,1),p(`span`,ve,o(v.value.toFixed(1))+`%`,1)])]),p(`div`,ye,[p(`div`,{class:`fill`,style:a({width:v.value+`%`})},null,4)]),p(`div`,be,[y.value?(g(),u(`button`,{key:0,onClick:L,class:`btn btn-primary`},` 继续学习 → `)):(g(),u(`button`,{key:1,onClick:R,class:`btn btn-primary`},` 开始学习 → `))])]),p(`div`,xe,[t[1]||=p(`h2`,null,`📚 课程目录`,-1),p(`div`,Se,[(g(!0),u(c,null,i(S.value,e=>(g(),u(`div`,{key:e.id,class:`course-item card card-hover`,style:a({background:F(e.baseWeekId||e.id)}),onClick:t=>B(e)},[p(`div`,we,[p(`div`,Te,o(e.icon),1),_(ue,{percentage:M(e),size:60,color:I(e.baseWeekId||e.id),class:n([`course-progress`,{"is-completed":N(e)}])},null,8,[`percentage`,`color`,`class`])]),p(`div`,Ee,[p(`h3`,null,o(e.title),1),p(`p`,null,o(e.description),1),e.skills?(g(),u(`div`,De,[(g(!0),u(c,null,i(e.skills,e=>(g(),u(`span`,{key:e,class:`skill-tag-small`},o(e),1))),128))])):d(``,!0),p(`div`,Oe,[p(`span`,ke,o(te(e))+` 课时`,1),p(`span`,Ae,o(e.progressLabel||`${Math.round(M(e))}% 完成`),1)])])],12,Ce))),128))])])]),p(`aside`,je,[p(`div`,Me,[t[2]||=p(`div`,null,[p(`p`,{class:`bonus-kicker`},`彩蛋收集栏`),p(`h2`,null,`🎁 已解锁文档`)],-1),p(`span`,Ne,o(w.value.length),1)]),w.value.length?(g(),u(`div`,Pe,[(g(!0),u(c,null,i(w.value,e=>(g(),u(`a`,{key:e.id,href:e.url,target:`_blank`,rel:`noopener`,class:`bonus-item`},[t[3]||=p(`span`,{class:`bonus-doc-icon`},`📄`,-1),p(`span`,Ie,[p(`strong`,null,o(e.title),1),p(`small`,null,o(e.sourceTitle||e.description),1)]),t[4]||=p(`span`,{class:`bonus-arrow`},`↗`,-1)],8,Fe))),128))])):(g(),u(`div`,Le,[...t[5]||=[p(`div`,{class:`bonus-empty-icon`},`✨`,-1),p(`p`,null,`完成带彩蛋的章节任务后，文档会自动收进这里。`,-1)]]))])])]))}},[[`__scopeId`,`data-v-5d78db3f`]]),ze=`modulepreload`,Be=function(e){return`/`+e},q={},J=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Be(t,n),t in q)return;q[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ze,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Y=()=>J(()=>import(`./Overview-BDawH9hX.js`),__vite__mapDeps([0,1,2])),X=()=>J(()=>import(`./Overview-l1q-on53.js`),__vite__mapDeps([3,1,4,5,6])),Z=()=>J(()=>import(`./Overview-BwBZALp3.js`),__vite__mapDeps([7,1,4,5,8])),Q=()=>J(()=>import(`./Overview-C3l840BE.js`),__vite__mapDeps([9,1,4,5,10])),Ve=[{path:`/`,name:`Home`,component:Re},{path:`/:weekId/lesson`,name:`Lesson`,component:()=>J(()=>import(`./Lesson-DvZEofpr.js`),__vite__mapDeps([11,1,12]))},{path:`/week1/overview`,component:Y},{path:`/week1/imageGen`,component:Y},{path:`/week1/videoGen`,component:Y},{path:`/week1/editing`,component:Y},{path:`/week1/photoBasics`,component:Y},{path:`/week1/visualLanguage`,component:Y},{path:`/week1/assignment`,component:Y},{path:`/week2/overview`,component:X},{path:`/week2/musicTheory`,component:X},{path:`/week2/suno`,component:X},{path:`/week2/cases`,component:X},{path:`/week2/assignment`,component:X},{path:`/week3/overview`,component:Z},{path:`/week3/shotsBasic`,component:Z},{path:`/week3/shotsAdvanced`,component:Z},{path:`/week3/prompts`,component:Z},{path:`/week3/aiMovement`,component:Z},{path:`/week3/assignment`,component:Z},{path:`/week4/overview`,component:Q},{path:`/week4/mindset`,component:Q},{path:`/week4/methodology`,component:Q},{path:`/week4/tools`,component:Q},{path:`/week4/cases`,component:Q},{path:`/week4/assignment`,component:Q}],He=f({history:m(),routes:Ve,scrollBehavior(){return{top:0}}}),Ue={id:`app`},$=ee({__name:`App`,setup(n){let r=O();return e(()=>{r.refreshProgress()}),(e,n)=>{let r=t(`router-view`);return g(),u(`div`,Ue,[_(r)])}}});$.use(y()),$.use(He),$.mount(`#app`);export{T as a,O as i,A as n,k as r,K as t};