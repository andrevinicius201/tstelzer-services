export default function Banner(){
    return (
        <div className="banner">
            <div className="row">
                
                <div className="col-md-6">
                    <img src="/images/ts_fisio.jpg" style={{maxWidth: 100 + "%"}}/>
                </div>   
                

                <div className="col-sm-6 d-flex align-content-center flex-wrap">
                    <h1> Testando um dois tres testando </h1>
                    <h2> Testando um dois tres testando </h2>
                    <h2> Fisioterapeuta e gata </h2>
                    <p> Focada em cuidar da Saúde e Beleza da sua Pele e dos seus Cabelos. </p>
                    <p> O Meu principal objetivo é auxiliar cada um de vocês a conquistarem a Sua Melhor Versão.
                    Dermatologia Clínica/Cirúrgica, Cosmiatria (Estética) e Tricologia (Cabelos). </p>
                    <button type="button" class="btn btn-secondary"><img src="images/wpp-logo.png" className="logo" style={{maxWidth: 24 + "px"}}/> CONVERSAR VIA WHATSAPP </button>                        
                    <br/>
                    
                </div>        
            </div>
        </div>

        // <div className="banner">
            
            
        // </div>    
    )
}
