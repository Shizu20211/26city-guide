<template>
    <header id="top" class="site-header">
        <div class="container header-inner">
            <RouterLink to="/cities" class="brand">
                <span class="brand-mark">
                    N
                </span>

                <span>
                    <strong>Nordic Guide</strong>
                    <small>Explore the North</small>
                </span>
            </RouterLink>

            <nav class="nav" aria-label="主要導覽">
                <RouterLink to="/cities">
                    城市探索
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 20;

    background: rgba(245, 240, 218, 0.95);
    border-bottom: 2px solid var(--color-border);

}

.header-inner {
    min-height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 24px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    color: var(--color-text);
    text-decoration: none;
}

.brand-mark {
    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    color: white;
    background: var(--color-accent);
    border: 2px solid var(--color-border);
    border-radius: 48% 52% 44% 56%;
    box-shadow: 3px 3px 0 var(--color-yellow);

    font-family: var(--font-display);
    font-size: 25px;
    font-weight: 400;
    transform: rotate(-5deg);
    transition: transform var(--transition);
}

.brand:hover .brand-mark {
    transform: translateY(-3px) rotate(5deg) scale(1.05);
}

.brand strong,
.brand small {
    display: block;
}

.brand strong {
    line-height: 1.2;
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.04em;
}

.brand small {
    margin-top: 2px;

    color: var(--color-text-soft);
    font-size: 11px;

    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.nav {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav a {
    padding: 9px 14px;

    color: var(--color-text-soft);
    text-decoration: none;

    border: 2px solid transparent;
    border-radius: var(--radius-sm);

    transition:
        color var(--transition),
        background var(--transition);
}

.nav a:hover,
.nav a.router-link-active {
    color: var(--color-text);
    background: var(--color-yellow);
    border-color: var(--color-border);
    transform: rotate(1deg);
}

@media (max-width: 480px) {
    .brand small {
        display: none;
    }
}
</style>
