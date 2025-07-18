import type { ServiceProps } from '@/app/types/contentful';

export default function SubServices({service}:ServiceProps){
    return(
        <section>
            <p style={{marginTop: '32px', marginBottom: '12px', lineHeight: '28px', fontWeight: '700', fontSize: '22px', color: '#121714'}}>Was ist inbegriffen?</p>
            {service.subServices.map((item) => (
                <div style={{display: 'flex', alignItems: 'center'}} key={item}>
                    <div style={{marginRight: '12px', height: '20px', width: '20px', aspectRatio: 1 / 1, border: '2px solid #DEE3E0', borderRadius: '100%', display: 'block'}}></div>
                    <p style={{margin: '12px 0px'}}>{item}</p>
                </div>
            ))}
        </section>
    )
}