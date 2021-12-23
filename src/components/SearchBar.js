import { useState } from 'react';
import styled from "styled-components";
import { Formik, Form, Field } from 'formik';

import Card from './Card'
import '../index.css';

const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #fccf1f;
		display:flex;
		justify-content:center;
		align-items: center;
    box-shadow: 2px 2px 2px rgb(256,256,256,0.2);
    border-bottom: 5px solid black;
`


const SearchBar = () => {
		const [state, setState] = useState({
			loading: false,
			pokemon: '',
			error: null,
		})
		
		const { laoding, pokemon, error } = state;
    
    const FetchData = async (value) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.search}`)
        const data = await response.json()
				setState({pokemon: data})
        console.log(data)
    }

    return (
        <div>
          <Container>
            <Formik
                  initialValues={{ search: "" }}
                  onSubmit={FetchData}
                >
                <Form>
                  <Field className="input" placeholder="Search" name="search"/>
                </Form>
            </Formik>
				</Container>
				{pokemon !== '' ? <Card props={ pokemon }/> : null}
        </div>
    )
}

export default SearchBar