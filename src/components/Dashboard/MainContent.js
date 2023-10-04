import React from 'react';
import { Container, Typography } from '@mui/material';

const MainContent = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
                SpaceX
            </Typography>
            <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                <Typography variant="body1" align="center" paragraph>
                    Explore the latest news, launches, and missions of SpaceX.
                </Typography>

                <Typography variant="h5" component="h2" align="left" gutterBottom>
                    Innovative Rockets
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                    SpaceX is known for its innovative approach to rocket design and manufacturing. They developed the Falcon 1, Falcon 9, and Falcon Heavy rockets, all of which are designed to be reusable to reduce the cost of access to space.
                </Typography>

                <Typography variant="h5" component="h2" align="left" gutterBottom>
                    Dragon Spacecraft
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                    SpaceX's Dragon spacecraft, both Cargo Dragon and Crew Dragon, have been instrumental in resupplying the International Space Station (ISS) and ferrying astronauts to and from the ISS. Crew Dragon, in particular, marked a significant milestone by becoming the first commercially-built spacecraft to carry astronauts to the ISS.
                </Typography>

                <Typography variant="h5" component="h2" align="left" gutterBottom>
                    Starship
                </Typography>
                <Typography variant="body1" align="left" paragraph>
                    SpaceX is actively working on the development of the Starship spacecraft, a fully reusable spacecraft designed for missions to the Moon, Mars, and beyond. It represents Elon Musk's ambitious vision of interplanetary travel.
                </Typography>
            </Container>
            
        </Container>
    );
};

export default MainContent;
