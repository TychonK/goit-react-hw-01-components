function Transactions({ transactions }) {
    const transactionsInfo = transactions.map((transaction) => {
        return (
            <tr key={transaction.id}>
                <td>{ transaction.type }</td>
                <td>{ transaction.amount }</td>
                <td>{ transaction.currency }</td>
            </tr>
        )
    })
    
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                { transactionsInfo }
            </tbody>
        </table>
    )
}

export default Transactions;