import React, { useState } from 'react'
import robotFormGif from '../../assets/gif/form.gif'
import './styles.scss'
import { TYPE_REPRESENTATION } from './data'
import { Form, RepresentationUser } from './interfaces'

const ContactForm: React.FC = () => {
  const [error, setError] = useState<Form>({
    name: '',
    representation: 'individual',
    company: '',
    subject: '',
    contact: ''
  })
  const [form, setForm] = useState<Form>({
    name: '',
    representation: 'individual',
    company: '',
    subject: '',
    contact: ''
  })

  const validateForm = (): boolean => {
    if (!form.name || form.name.length < 3) {
      setError({...error, name: form.name.length < 3 ? 'Por favor, ingrese su nombre completo.' :'Por favor, ingrese su nombre.'})
      return false
    }
    if (!form.subject) {
      setError({...error, subject: 'Por favor, ingrese el asunto.'})
      return false
    }
    if (!form.contact) {
      setError({...error, contact: 'Por favor, ingrese su email o teléfono.'})
      return false
    }
    if (form.representation === 'company' && !form.company) {
      setError({...error, company: 'Por favor, ingrese el nombre de su compañía.'})
      return false
    }
    return true
  }

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm())
      return

    if (form) {
      const phoneNumber = '593992369438'
      const message = `Hola, Mi nombre es ${form.name} y represento a una ${
        form.representation === 'company'
          ? 'empresa llamada ' + form.company
          : 'persona individual'
      }.\nMe encantaría preguntarle sobre ${
        form.subject
      }. Puede contactarme en ${form.contact}.`
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`
      window.open(url, '_blank')
    }
    // window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const handleRepresentationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      representation: event.target.value as RepresentationUser
    })
  }

  const onChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setForm({ ...form, [id]: value })
    setError({...error, [id]: ''})
  }

  return (
    <section id='contactForm' className='contactFormContainer'>
      <div className='contentTitle'>
        <h2>Contáctame</h2>
      </div>
      <div className='content'>
        <div className='contactForm'>
          <form>
            <label htmlFor='name'>Hola 👋 Mi nombre es...</label>
            <input
              type='text'
              id='name'
              placeholder='Su nombre...'
              value={form?.name}
              onChange={onChangeForm}
              className={`${error.name ? 'errorField' : ''}`}
            />
            <span className='errorForm' >{error.name}</span>

            <label htmlFor='representation'>y represento a una...</label>
            <div className='representationOptions'>
              {TYPE_REPRESENTATION.map((tr) => (
                <div key={tr.id}>
                  <input
                    type='radio'
                    id={tr.id}
                    name={tr.name}
                    value={tr.value}
                    checked={form?.representation === tr.value}
                    onChange={handleRepresentationChange}
                  />
                  <label htmlFor={tr.id}>{tr.label}</label>
                </div>
              ))}
            </div>

            {form?.representation === 'company' ? (
              <>
                <label htmlFor='company'>Por el nombre de...</label>
                <input
                  type='text'
                  id='company'
                  placeholder='El nombre de su empresa...'
                  value={form?.company}
                  onChange={onChangeForm}
                  className={`${error.company ? 'errorField' : ''}`}
                />
                <span className='errorForm' >{error.company}</span>
              </>
            ) : null}

            <label htmlFor='subject'>Me encantaría preguntarle sobre...</label>
            <textarea
              id='subject'
              placeholder='Lo que necesite :)'
              value={form?.subject}
              onChange={onChangeForm}
              className={`${error.subject ? 'errorField' : ''}`}
            ></textarea>
            <span className='errorForm' >{error.subject}</span>

            <label htmlFor='contact'>Contácteme aquí...</label>
            <input
              type='text'
              id='contact'
              placeholder='Su Contacto...'
              value={form?.contact}
              onChange={onChangeForm}
              className={`${error.contact ? 'errorField' : ''}`}
            />
            <span className='errorForm' >{error.contact}</span>

            <button type='submit' onClick={handleClick}>
              Enviar
            </button>
          </form>
        </div>
        <div className='contact-image'>
          <img src={robotFormGif} alt='My Development Process' />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
