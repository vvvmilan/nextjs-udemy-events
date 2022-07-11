import {useRouter} from "next/router";
import {getFilteredEvents} from "../../events";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;
    console.log(filterData)

    if (!filterData) {
        return <p className='center'>Loading</p>;
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth= +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter</p>
                    <div className='center'>
                        <Button link='/events'>show all events</Button>
                    </div>
                </ErrorAlert>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for chosen filter</p>
                    <div className='center'>
                        <Button link='/events'>show all events</Button>
                    </div>
                </ErrorAlert>
            </>
        )
    }

    const date = new Date(numYear, numMonth-1)

    return(
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </>
    )
}

export default FilteredEventsPage;