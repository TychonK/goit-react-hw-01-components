function Stats({title, stats}) {
    const statsElements = stats.map((stat) => {
        return (
            <li class="item">
                <span class="label">{stat.label}</span>
                <span class="percentage">{ stat.percentage } %</span>
            </li>
        )
        
    })
        return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                    {statsElements}
            </ul>
        </section>
    );
}

export default Stats;