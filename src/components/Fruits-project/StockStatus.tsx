export default function StockStatus({
                                        actionStatus,
                                        isDisabled,
                                        btnLabel,
                                        btnClass,
                                        amount,
                                    }: {
    actionStatus: string;
    isDisabled: boolean;
    btnLabel: string;
    btnClass: string;
    amount: number;
}) {
    return (
        <>
            <h6 className={`card-subtitle mb-1 ${ amount > 0 ? 'text-success' : 'text-danger'}`}>
                {actionStatus}
            </h6>
            <button disabled={isDisabled} className={`btn ${btnClass}`}> {btnLabel} </button>
        </>
    );
}