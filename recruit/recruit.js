/**
 * Ceil Studio Recruit — Render role cards from CEIL_RECRUIT_ROLES / CEIL_RECRUIT_ROLES_EN
 * State-driven: 已確定負責人 (owner) or 招募中 (CTA to #contact)
 */
 (function () {
  var rolesData = (typeof CEIL_RECRUIT_ROLES_EN !== 'undefined')
    ? CEIL_RECRUIT_ROLES_EN
    : (typeof CEIL_RECRUIT_ROLES !== 'undefined' ? CEIL_RECRUIT_ROLES : null);

  if (!rolesData) return;

  var container = document.getElementById('ceil-role-cards');
  if (!container) return;

  var lastCategory = '';
  rolesData.forEach(function (role) {
    if (role.category !== lastCategory) {
      lastCategory = role.category;
      var heading = document.createElement('h3');
      heading.className = 'ceil-role-category';
      heading.textContent = role.category;
      container.appendChild(heading);
    }

    var card = document.createElement('div');
    card.className = 'ceil-role-card';

    var titleEl = document.createElement('h4');
    titleEl.className = 'ceil-role-card__title';
    titleEl.textContent = role.roleName;
    card.appendChild(titleEl);

    var dutiesWrap = document.createElement('div');
    dutiesWrap.className = 'ceil-role-card__duties';
    if (role.duties && role.duties.length) {
      role.duties.forEach(function (d) {
        var dutyEl = document.createElement('div');
        dutyEl.className = 'ceil-role-card__duty';
        var labelSpan = document.createElement('strong');
        labelSpan.className = 'ceil-role-card__duty-label';
        labelSpan.textContent = (d.label || '').trim();
        dutyEl.appendChild(labelSpan);
        var textSpan = document.createElement('span');
        textSpan.className = 'ceil-role-card__duty-text';
        textSpan.textContent = (d.text || '').trim();
        dutyEl.appendChild(textSpan);
        dutiesWrap.appendChild(dutyEl);
      });
    }
    card.appendChild(dutiesWrap);

    var footer = document.createElement('div');
    footer.className = 'ceil-role-card__footer';
    card.appendChild(footer);

    container.appendChild(card);
  });
})();
