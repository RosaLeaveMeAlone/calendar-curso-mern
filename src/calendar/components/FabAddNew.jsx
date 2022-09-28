import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"


export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClick = () => {
        setActiveEvent(
            {
                title: '',
                notes: '',
                start: new Date(),
                end: addHours(new Date(), 2),
                bgColor: '$fafafa',
                user: {
                    _id: '1234',
                    name: 'Joel'
                }
            }
        );
        openDateModal();
    }


    return (
        <button
            onClick={handleClick}
            className="btn btn-primary fab"
        >
            <i className="fas fa-plus"></i>

        </button>
    )
}
