import React from 'react';
import {Card,Grid, GridColumn} from 'semantic-ui-react';

export default function People({data}) { 
    return (
        <>
            <h1>PEOPLE</h1>
            
            <Grid columns={3}>
                {data.map((people,i)=>
                {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <strong> Height</strong>
                                        <p> {people.height} </p>
                                        <strong> Mass</strong>
                                        <p> {people.mass} </p>
                                        <strong> Hair color</strong>
                                        <p> {people.hair_color} </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    );
}
