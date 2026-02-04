/**
 * Ceil Studio Recruit — Render SkillCards from CEIL_RECRUIT_SKILLS / CEIL_RECRUIT_SKILLS_EN
 */
(function () {
  // Determine which data source to use
  var skillsData = (typeof CEIL_RECRUIT_SKILLS_EN !== 'undefined') 
    ? CEIL_RECRUIT_SKILLS_EN 
    : (typeof CEIL_RECRUIT_SKILLS !== 'undefined' ? CEIL_RECRUIT_SKILLS : null);

  if (!skillsData) return;

  var container = document.getElementById('ceil-skill-matrix-cards');
  if (!container) return;

  var statusLabels = { O: 'Solo Able', X: 'Open Role', CO: 'Co-op', AI: 'AI Workflow' };
  var lastCategory = '';

  skillsData.forEach(function (item) {
    if (item.category !== lastCategory) {
      lastCategory = item.category;
      var heading = document.createElement('h3');
      heading.className = 'ceil-matrix-category';
      heading.textContent = item.category;
      container.appendChild(heading);
    }

    var card = document.createElement('div');
    var statusClass = '';
    if (item.status === 'X') statusClass = ' ceil-skill-card--open';
    else if (item.status === 'CO') statusClass = ' ceil-skill-card--co';
    else if (item.status === 'O') statusClass = ' ceil-skill-card--o';
    else if (item.status === 'AI') statusClass = ' ceil-skill-card--ai';
    card.className = 'ceil-skill-card' + statusClass;
    card.setAttribute('data-status', item.status);

    var statusLabel = statusLabels[item.status] || item.status;
    card.innerHTML =
      '<div class="ceil-skill-card__header">' +
        '<span class="ceil-skill-card__role">' + escapeHtml(item.roleName) + '</span>' +
        '<span class="ceil-skill-card__status" title="' + escapeHtml(statusLabel) + '">' + item.status + '</span>' +
      '</div>' +
      '<div class="ceil-skill-card__tools">' + escapeHtml(item.tools) + '</div>' +
      (item.description ? '<div class="ceil-skill-card__desc">' + escapeHtml(item.description) + '</div>' : '');

    container.appendChild(card);
  });

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
