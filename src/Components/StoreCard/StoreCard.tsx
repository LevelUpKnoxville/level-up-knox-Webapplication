import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { StoreCardProps } from "../Context/types";
import { StoreCalendarWeekly } from "./StoreCalendarWeekly/StoreCalendarWeekly";
import "./StoreCardS.scss";
import { StoreInformation } from "./StoreInformation/StoreInformation";

interface Props {
    card: StoreCardProps;
}

export const StoreCard = ({ card }: Props) => {
    const { icon, calender, name } = card;
    const [showCal, setShowCal] = useState<boolean>(false);

    return (
        <div>
            {showCal && <StoreCalendarWeekly week={calender} name={name} />}
            <Card className="StoreCard">
                <Card.Img src={icon} className="icon" />
                <div className="Card-body">
                    <Card.Body>
                        <StoreInformation card={card} />
                        <Container>
                            <Button
                                className="cardButton"
                                variant="outline-primary"
                            >
                                Store Hours
                            </Button>
                            <Button
                                className="cardButton"
                                variant="outline-primary"
                                onClick={() => {
                                    setShowCal(!showCal);
                                }}
                            >
                                Calendar
                            </Button>
                        </Container>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};
