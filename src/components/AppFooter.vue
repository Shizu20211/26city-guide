<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <p class="footer-kicker">NORDIC NOTES · EST. 2026</p>
        <h2>把北方的風景，<br>收進下一段旅程。</h2>
      </div>

      <div class="footer-links">
        <RouterLink to="/cities">城市探索</RouterLink>
        <a href="#top">回到頁首 ↑</a>
      </div>
    </div>

    <div class="container footer-bottom">
      <span aria-hidden="true">⚓︎ 〰︎ ⛵︎</span>
      <small>© 2026 Nordic Guide</small>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  padding: 76px 0 26px;
  color: var(--color-cream);
  background: var(--color-text);
  border-top: 3px solid var(--color-accent);
}

.site-footer::after {
  content: 'NORDIC GUIDE';
  position: absolute;
  right: -12px;
  bottom: -30px;
  color: rgba(245, 240, 218, 0.07);
  font: 400 clamp(68px, 12vw, 168px)/1 var(--font-display);
  letter-spacing: 0.04em;
  pointer-events: none;
}

.footer-inner {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 48px;
}

.footer-kicker {
  margin: 0 0 14px;
  color: var(--color-orange);
  font: 400 14px/1 var(--font-display);
  letter-spacing: 0.14em;
}

h2 {
  margin: 0;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.2;
  letter-spacing: 0.04em;
}

.footer-links {
  display: grid;
  gap: 14px;
  min-width: 150px;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dashed rgba(245, 240, 218, 0.45);
  transition: color var(--transition), transform var(--transition);
}

.footer-links a:hover {
  color: var(--color-yellow);
  transform: translateX(5px);
}

.footer-bottom {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  padding-top: 18px;
  border-top: 1px solid rgba(245, 240, 218, 0.2);
}

.footer-bottom span {
  color: var(--color-primary);
  letter-spacing: 0.5em;
}

@media (max-width: 640px) {
  .footer-inner {
    align-items: start;
    flex-direction: column;
  }

  .footer-bottom {
    margin-top: 48px;
  }
}
</style>
