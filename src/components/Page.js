import React from 'react'
import Error from './Error'
import Forecast from './Forecast'
import Form from './Form'
import Header from './Header'
import Loader from './Loader'
import useForecast from './useForecast'



function Page() {
   const {error, loading, forecast, submitRequest} = useForecast()

   const onSubtmit = (value) =>{
    submitRequest(value)
   }

    return (
        <main className="page">
            <Header/>

            {/* input-box */}
            <div className="box">
                {/* form */}
                <Form submitSearch={onSubtmit}/>
                {/* error */}
               {error &&  <h1><Error/> <br />{error}</h1> }

                {/* loaded */}
                {loading && !error && <Loader/> }

                {/* result display */}
                {!error && forecast && !loading && <Forecast forecast={forecast}/> }
            </div>
        </main>
    )
}

export default Page
