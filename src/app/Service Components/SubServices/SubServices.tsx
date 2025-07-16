import { Service } from "@/app/data/services"

export default function SubServices({service}:{service: Service}){
    return(
        <section>
            <p style={{marginTop: '32px', marginBottom: '12px', lineHeight: '28px', fontWeight: '700', fontSize: '22px', color: '#121714'}}>Was ist inbegriffen?</p>
            {service.subServices.map((service) => (
                <div style={{display: 'flex', alignItems: 'center'}} key={service.title}>
                    <div style={{marginRight: '12px', height: '20px', width: '20px', aspectRatio: 1 / 1, border: '2px solid #DEE3E0', borderRadius: '100%', display: 'block'}}></div>
                    <p style={{margin: '12px 0px'}}>{service.title}</p>
                </div>
            ))}
        </section>
    )
}