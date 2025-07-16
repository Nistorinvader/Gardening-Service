'use client';

import { useState } from 'react';
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import classes from './ContactForm.module.css';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { FaFacebook, FaTiktok } from 'react-icons/fa';

export default function ContactForm() {
    const [submissionStatus, setSubmissionStatus] = useState({
        submitting: false,
        succeeded: false,
        error: false,
    });

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            name: '',
            tel: '',
            message: '',
        },
        validate: {
            name: (value) => (value.trim().length < 2 ? 'Der Name ist zu kurz' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Falsche E-Mail'),
            tel: (value) => (value.trim().length < 7 ? 'Falsche Telefonnummer' : null),
            message: (value) => (value.trim().length < 5 ? 'Die Nachricht ist zu kurz' : null),
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        setSubmissionStatus({ submitting: true, succeeded: false, error: false });

        try {
            const response = await fetch('https://formspree.io/f/xanbyqyw', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setSubmissionStatus({ submitting: false, succeeded: true, error: false });
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error("Failed to submit the form:", error);
            setSubmissionStatus({ submitting: false, succeeded: false, error: true });
        }
    };

    if (submissionStatus.succeeded) {
        return <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>Danke! Ihre Nachricht wurde gesendet.</p>;
    }

    return (
        <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)} id="Kontakt">
            <TextInput
                {...form.getInputProps('name')}
                error={form.errors.name}
                classNames={{ root: classes.root, label: classes.label, input: classes.input }}
                label="Name"
                key={form.key('name')}
                placeholder="Name"
            />
            <TextInput
                {...form.getInputProps('email')}
                error={form.errors.email}
                classNames={{ root: classes.root, label: classes.label, input: classes.input }}
                label="E-mail"
                key={form.key('email')}
                placeholder="E-Mail"
            />
            <TextInput
                {...form.getInputProps('tel')}
                error={form.errors.tel}
                classNames={{ root: classes.root, label: classes.label, input: classes.input }}
                label="Telefon"
                key={form.key('tel')}
                placeholder="Telefon"
            />
            <Textarea
                {...form.getInputProps('message')}
                error={form.errors.message}
                classNames={{ root: classes.root, label: classes.label, input: classes.textinput }}
                label="Nachricht"
                placeholder="Nachricht"
            />

            <Group justify="flex-end" mt="md">
                <Button 
                    className={classes.button} 
                    w={85} 
                    h={40} 
                    px={10} 
                    type="submit"
                    loading={submissionStatus.submitting}
                >
                    Senden
                </Button>
            </Group>

            {submissionStatus.error && (
                <p style={{ color: 'red', marginTop: '1rem' }}>
                    Fehler beim Senden. Bitte versuchen Sie es später erneut.
                </p>
            )}

            <div style={{ marginTop: '16px' }}>
                <p className={classes.info}>Telefon: +49 172 5711590</p>
                <p className={classes.info}>E-Mail: hmsnistor@gmail.com</p>
                <p className={classes.info}>Adresse: Hauptstraße 19, 86863 Langenneufnach</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize:'2rem', color: 'black'}}>
                    <Link href={'https://www.facebook.com/share/1CLYMTuWvT/?mibextid=wwXIfr'} style={{textDecoration: 'none', color: 'black'}}>
                        <FaFacebook />
                    </Link>
                    <Link href={'https://www.tiktok.com/@gartenservice_bayern'} style={{textDecoration: 'none', color: 'black'}}>
                        <FaTiktok />
                    </Link>
                </div>
            </div>
        </form>
    );
}