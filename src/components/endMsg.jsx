import '../../scss/endmsg.scss';
import thankYouImg from "../../assets/images/icon-thank-you.svg"
const Endmsg = () => {
    return ( 
        <>
            <section className='endmsg'>
                <img src={thankYouImg} alt="check img"/>
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </section>
        </>
     );
}
 
export default Endmsg;