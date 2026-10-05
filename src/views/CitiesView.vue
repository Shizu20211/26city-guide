<script setup>
import { cities } from '@/data/spots'

const heroImage = `${import.meta.env.BASE_URL}images/copenhagen.jpg`
</script>

<template>
    <main>
        <section class="hero" :style="{ '--hero-image': `url(${heroImage})` }">
            <div class="container hero-content" v-reveal>
                <p class="eyebrow">
                    NORDIC CITY GUIDE
                </p>

                <h1>
                    在遙遠的北方
                    <br>
                    找尋一場相遇
                </h1>

                <p class="hero-description">
                    從島嶼、港灣到海岸城市，循著食物、建築與日常，
                    閱讀北歐土地緩慢展開的故事。
                </p>

                <RouterLink to="/cities/stockholm" class="primary-button">
                    開始探索
                    <span aria-hidden="true">→</span>
                </RouterLink>
            </div>
        </section>

        <section class="cities-section">
            <div class="container">
                <div class="section-heading" v-reveal>
                    <div>
                        <p class="eyebrow">
                            DESTINATIONS
                        </p>

                        <h2>
                            選擇城市
                        </h2>
                    </div>

                    <p>
                        探索北歐各城市的美食、
                        文化與代表性景點。
                    </p>
                </div>

                <div class="city-grid">
                    <RouterLink v-for="city in cities" :key="city.id" v-reveal :to="{
                        name: 'city',
                        params: {
                            city: city.id
                        }
                    }" class="city-card">

                        <div class="city-image">
                            <img :src="city.image" :alt="`${city.name}城市景觀`">

                            <span class="country">
                                {{ city.country }}
                            </span>
                        </div>

                        <div class="city-body">
                            <p class="city-english">
                                {{ city.englishName }}
                            </p>

                            <h3>
                                {{ city.name }}
                            </h3>

                            <p>
                                {{ city.subtitle }}
                            </p>

                            <p class="city-description">
                                {{ city.description }}
                            </p>

                            <span class="explore">
                                探索城市
                                <span aria-hidden="true">
                                    →
                                </span>
                            </span>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.hero {
    position: relative;
    overflow: hidden;
    padding: 110px 0 100px;
    background: var(--color-primary);
    border-bottom: 3px solid var(--color-border);
}

.hero::after {
    content: '';
    position: absolute;
    top: 7%;
    right: -3%;
    width: min(46vw, 610px);
    aspect-ratio: 4 / 5;
    background: var(--hero-image) center / cover;
    border: 3px solid var(--color-border);
    border-radius: 42% 58% 48% 52% / 8% 10% 7% 9%;
    box-shadow: 12px 14px 0 rgba(53, 47, 43, 0.22);
    transform: rotate(2.5deg);
    animation: gentle-float 6s ease-in-out infinite;
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 1180px;
}

.eyebrow {
    margin: 0 0 16px;

    color: var(--color-cream);

    font-size: 16px;
    font-family: var(--font-display);
    font-weight: 400;

    letter-spacing: 0.22em;
}

.hero h1 {
    max-width: 650px;
    margin: 0;
    font-size: clamp(44px,7vw,80px);

    line-height: 1.15;
    letter-spacing: -0.04em;
    font-family: var(--font-sans);
    color: var(--color-cream);
    font-weight: 700;
    text-shadow: 3px 3px 0 rgba(53, 47, 43, 0.16);
}

.hero-description {
    max-width: 520px;

    margin: 28px 0;

    color: var(--color-cream);

    font-size: 18px;
}

.primary-button {
    min-height: 48px;

    display: inline-flex;
    align-items: center;

    gap: 14px;

    padding: 12px 20px;

    color: var(--color-text);
    background: var(--color-yellow);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-sm);
    box-shadow: 5px 6px 0 var(--color-border);

    text-decoration: none;
    font-weight: 600;

    transition:
        transform var(--transition),
        background var(--transition);
}

.primary-button:hover {
    background: var(--color-accent);
    transform: translate(3px, 3px) rotate(-1deg);
    box-shadow: 2px 3px 0 var(--color-border);
}

.cities-section {
    padding: 88px 0;
    color: var(--color-text);
    background:
        radial-gradient(circle at 8% 14%, rgba(211, 189, 86, 0.24) 0 7px, transparent 8px),
        radial-gradient(circle at 92% 82%, rgba(239, 111, 104, 0.18) 0 10px, transparent 11px),
        var(--color-cream);
}

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;

    gap: 32px;

    margin-bottom: 36px;
}

.section-heading h2 {
    margin: 0;

    font-size: clamp(32px,
            4vw,
            48px);

    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: 0.08em;
}

.section-heading>p {
    max-width: 360px;

    margin: 0;

    color: var(--color-text-soft);
}

.city-grid {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 34px;
}

.city-card {
    overflow: hidden;

    color: inherit;
    background: var(--color-surface);

    border: 1px solid var(--color-border);

    border-radius: var(--radius-lg);

    text-decoration: none;
    display: flex;
    flex-direction: column;

    box-shadow: var(--shadow-md);
    transition: transform var(--transition), box-shadow var(--transition);
}

.city-card:nth-child(2) {
    transform: rotate(0.8deg) translateY(12px);
}

.city-card:nth-child(3) {
    transform: rotate(-0.7deg);
}

.city-card:hover {
    transform: translateY(-10px) rotate(-1deg) scale(1.015);
    box-shadow: 10px 13px 0 rgba(53, 47, 43, 0.2);
}

.city-image {
    position: relative;

    aspect-ratio: 4 / 3;

    overflow: hidden;
    border-bottom: 1px solid var(--color-border);
}

.city-image img {
    height: 100%;
    object-fit: cover;

    transition:
        transform 400ms ease;
}

.city-card:hover img {
    transform: scale(1.04);
}

.country {
    position: absolute;
    left: 16px;
    bottom: 16px;

    padding: 7px 12px;

    color: white;
    background: var(--color-accent);

    border: 2px solid var(--color-border);
    border-radius: var(--radius-sm);
    box-shadow: 2px 3px 0 var(--color-border);

    font-size: 13px;
    font-weight: 600;
}

.city-card:nth-child(1) .country {
    background: var(--color-primary);
}

.city-card:nth-child(2) .country {
    background: var(--color-accent);
}

.city-card:nth-child(3) .country {
    background: var(--color-green);
}

.city-card:nth-child(2) .city-english {
    color: var(--color-accent);
}

.city-card:nth-child(3) .city-english {
    color: var(--color-green);
}

.city-body {
    padding: 26px 28px 28px;
    display: flex;
    flex: 1;
    flex-direction: column;
}

.city-english {
    margin: 0 0 4px;

    color: var(--color-primary);

    font-family: var(--font-display);

    font-size: 16px;
    text-transform: uppercase;

    letter-spacing: 0.1em;
}

.city-body h3 {
    margin: 0;

    font-size: 26px;
    font-family: var(--font-display);
    font-size: 31px;
    font-weight: 400;
}

.subtitle {
    margin: 10px 0 8px;
    color: var(--color-text);
    font-weight: 600;
}

.city-description {
    margin: 0;
    color: var(--color-text-soft);
    line-height: 1.7;
}

.explore {
    display: inline-flex;
    gap: 8px;

    margin-top: auto;
    padding-top: 20px;

    color: var(--color-text);

    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 400;
    border-bottom: 2px dashed var(--color-accent);
}

@media (max-width: 900px) {
    .hero::after {
        right: -18%;
        opacity: 0.38;
    }

    .city-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .hero {
        padding: 76px 0 84px;
    }

    .hero::after {
        top: auto;
        right: -22%;
        bottom: -12%;
        width: 72vw;
        opacity: 0.2;
    }

    .section-heading {
        align-items: start;
        flex-direction: column;
    }

    .city-grid {
        grid-template-columns: 1fr;
    }

    .city-body {
        padding: 22px;
    }

    .city-card:nth-child(2),
    .city-card:nth-child(3) {
        transform: none;
    }
}
</style>
