import './Stats.scss'

function Stats({ title, stats }) {
    const statsElements = stats.map((stat) => {
        return (
            <li className="item" key={stat.id}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{ stat.percentage }%</span>
            </li>
        )
        
    })
        return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                    {statsElements}
            </ul>
        </section>
    );
}

export default Stats;