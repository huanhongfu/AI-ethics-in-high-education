// 动态渲染对照表
const content = document.getElementById('content');

function renderScene(sc){
  const sec = document.createElement('section');
  sec.id = 'scene-' + sc.id;
  sec.innerHTML = `<h2>${sc.title}</h2>`;
  const table = document.createElement('table');
  table.innerHTML = `
    <thead><tr><th>❌ 不规范提示词</th><th>✅ 规范改写示例</th></tr></thead>
    <tbody>
      ${sc.pairs.map(p=>`
        <tr><td><code>${p.bad}</code></td><td><code>${p.good}</code></td></tr>
      `).join('')}
    </tbody>`;
  sec.appendChild(table);
  content.appendChild(sec);
}

// 初始加载
SCENE_DATA.forEach(renderScene);