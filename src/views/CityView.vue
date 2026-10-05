<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { cities, spots } from '@/data/spots'
// 在 Vue Router 路由導航時，query 是附加在網址（URL）問號 ? 後面的鍵值對參數
const route = useRoute()

const filters = [
    { label: '全部', value: undefined },
    { label: '美食', value: 'food' },
    { label: '景點', value: 'attraction' },
    { label: '文化', value: 'culture' }
]

const validTypes = filters
    .map((filter) => filter.value)
    .filter(Boolean)

const activeType = computed(() => {
    return validTypes.includes(route.query.type)
        ? route.query.type
        : undefined
})

const currentCity = computed(() => {
    return cities.find((city) => city.id === route.params.city)
})

const citySpots = computed(() => {
    let result = spots.filter(
        (spot) => spot.city === route.params.city
    )

    if (activeType.value) {
        result = result.filter(
            (spot) => spot.type === activeType.value
        )
    }

    return result
})

const typeName = {
    food: '美食',
    attraction: '景點',
    culture: '文化'
}
</script>

<template>
    <main v-if="currentCity" class="container">
        <RouterLink to="/cities" class="back">
            ← 返回城市列表
        </RouterLink>

        <header class="city-header" v-reveal>
            <p>{{ currentCity.country }}</p>

            <h1>
                {{ currentCity.name }}
            </h1>

            <p class="english-name">
                {{ currentCity.englishName }}
            </p>

            <p>
                {{ currentCity.description }}
            </p>
        </header>

        <nav class="filters" aria-label="景點分類">
            <RouterLink
                v-for="filter in filters"
                :key="filter.label"
                :to="{
                    name: 'city',
                    params: { city: route.params.city },
                    query: filter.value ? { type: filter.value } : undefined
                }"
                :class="{ active: activeType === filter.value }"
                :aria-current="activeType === filter.value ? 'page' : undefined"
            >
                {{ filter.label }}
            </RouterLink>
        </nav>

        <section class="spot-grid">
            <RouterLink v-for="spot in citySpots" :key="spot.id" v-reveal :to="{
                name: 'spot-detail',
                params: {
                    city: spot.city,
                    id: spot.id
                }
            }" class="spot-card">
                <div class="spot-image">
                    <img :src="spot.image" :alt="spot.name">
                </div>

                <div class="spot-content">
                    <span class="spot-type">
                        {{ typeName[spot.type] }}
                    </span>

                    <h2>
                        {{ spot.name }}
                    </h2>

                    <p>
                        {{ spot.shortDescription }}
                    </p>

                    <strong>
                        查看詳細資料 →
                    </strong>
                </div>
            </RouterLink>
        </section>

        <p v-if="citySpots.length === 0" class="empty" role="status">
            目前沒有符合這個分類的景點。
        </p>
    </main>

    <main v-else class="container">
        <h1>找不到這個城市</h1>

        <RouterLink to="/cities">
            返回城市列表
        </RouterLink>
    </main>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 24px;
    color: var(--color-text);
    background: #dcebed;
    box-shadow: 0 0 0 100vmax #dcebed;
    clip-path: inset(0 -100vmax);
}

.back {
    display: inline-block;
    padding-bottom: 3px;
    color: var(--color-text);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 18px;
    border-bottom: 2px dashed var(--color-accent);
    transition: transform var(--transition);
}

.back:hover {
    transform: translateX(-5px) rotate(-1deg);
}

.city-header {
    max-width: 700px;
    margin: 40px 0;
}

.city-header h1 {
    margin: 8px 0;
    font-size: 48px;
    font-family: var(--font-display);
    font-size: clamp(48px, 7vw, 72px);
    font-weight: 400;
    line-height: 1.05;
}

.english-name {
    color: var(--color-accent);
    font-size: 24px;
    font-family: var(--font-display);
    letter-spacing: 0.08em;
}

.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 32px 0;
}

.filters a {
    min-height: 44px;

    display: inline-flex;
    align-items: center;

    padding: 9px 18px;

    color: var(--color-text-soft);
    background: var(--color-surface);

    border: 2px solid var(--color-border);
    border-radius: var(--radius-sm);
    box-shadow: 3px 4px 0 rgba(53, 47, 43, 0.15);

    text-decoration: none;
    font-weight: 500;

    transition:
        color var(--transition),
        background var(--transition),
        border-color var(--transition);
}

.filters a:hover {
    color: var(--color-text);
    background: var(--color-yellow);
    border-color: var(--color-border);
    transform: translateY(-3px) rotate(-1deg);
}

.filters a.active {
    color: var(--color-surface);
    background: var(--color-accent);
    border-color: var(--color-border);
}

.spot-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 34px;
}

.spot-card {
    overflow: hidden;

    color: var(--color-text);
    background: var(--color-surface);

    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);

    text-decoration: none;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-md);

    transition:
        transform var(--transition),
        box-shadow var(--transition);
}

.spot-card:hover {
    transform: translateY(-9px) rotate(0.8deg) scale(1.012);
    box-shadow: 9px 12px 0 rgba(53, 47, 43, 0.19);
}

.spot-image {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-bottom: 1px solid var(--color-border);
}

.spot-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 350ms ease;
}

.spot-card:hover .spot-image img {
    transform: scale(1.04);
}

.spot-content {
    padding: 28px;
    display: flex;
    flex: 1;
    flex-direction: column;
}

.spot-type {
    display: inline-block;

    margin-bottom: 10px;
    padding: 5px 11px;

    color: var(--color-primary);
    background: transparent;

    border: 2px solid currentColor;
    border-radius: var(--radius-sm);

    font-size: 13px;
    font-weight: 600;
}

.spot-card:nth-child(3n + 2) .spot-type {
    color: var(--color-accent);
}

.spot-card:nth-child(3n) .spot-type {
    color: var(--color-green);
}

.spot-content h2 {
    margin: 0 0 12px;

    font-size: 29px;
    font-family: var(--font-display);
    font-weight: 400;
}

.spot-content p {
    margin: 0;

    color: var(--color-text-soft);
    line-height: 1.7;
}

.spot-content strong {
    display: inline-block;

    margin-top: auto;
    padding-top: 20px;

    color: var(--color-text);
    font-family: var(--font-display);
    font-weight: 400;
    border-bottom: 2px dashed var(--color-accent);
}

.empty {
    padding: 24px;
    color: var(--color-text-soft);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    border: 2px dashed var(--color-border);
}

@media (max-width: 900px) {
    .spot-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .city-header h1 {
        font-size: 38px;
    }

    .spot-grid {
        grid-template-columns: 1fr;
    }

    .spot-content {
        padding: 22px;
    }
}
</style>
