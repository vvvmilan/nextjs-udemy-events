import {getAllEvents} from "../../events";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

const AllEventsPage = () => {
    const router = useRouter();
    const events = getAllEvents();
    const handleFindEvents = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={handleFindEvents} />
            <EventList items={events}/>
        </>
    )
}

export default AllEventsPage;