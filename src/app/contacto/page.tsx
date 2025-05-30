'use client';

import { useState, useEffect } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaResult, setCaptchaResult] = useState(0);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Generar pregunta matemática simple para CAPTCHA solo en el cliente
  useEffect(() => {
    setIsClient(true);
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`¿Cuánto es ${num1} + ${num2}?`);
    setCaptchaResult(num1 + num2);
  }, []);

  // Función para sanitizar entrada de texto
  const sanitizeInput = (input: string): string => {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '');
  };

  // Validación de email con regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validación de nombre (solo letras, espacios y algunos caracteres especiales)
  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/;
    return nameRegex.test(name);
  };

  // Validación de mensaje (longitud y contenido básico)
  const validateMessage = (message: string): boolean => {
    if (message.length < 10 || message.length > 1000) return false;
    // Detectar patrones sospechosos
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+=/i,
      /eval\(/i,
      /document\./i,
      /window\./i
    ];
    return !suspiciousPatterns.some(pattern => pattern.test(message));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async () => {
    
    // Validaciones de seguridad
    if (!validateName(formData.nombre)) {
      setSubmitMessage('El nombre contiene caracteres no válidos o es muy corto/largo.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!validateMessage(formData.mensaje)) {
      setSubmitMessage('El mensaje debe tener entre 10 y 1000 caracteres y no contener código malicioso.');
      return;
    }

    // Verificar CAPTCHA (solo si el cliente está cargado)
    if (isClient && parseInt(captchaAnswer) !== captchaResult) {
      setSubmitMessage('La respuesta del CAPTCHA es incorrecta. Por favor, inténtalo de nuevo.');
      return;
    }

    // Verificar aceptación de privacidad
    if (!acceptPrivacy) {
      setSubmitMessage('Debes aceptar el aviso de privacidad para continuar.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulación de envío seguro
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Limpiar formulario después del envío exitoso
      setFormData({ nombre: '', email: '', mensaje: '' });
      setCaptchaAnswer('');
      setAcceptPrivacy(false);
      
      // Generar nueva pregunta CAPTCHA
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setCaptchaQuestion(`¿Cuánto es ${num1} + ${num2}?`);
      setCaptchaResult(num1 + num2);
      
      setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    } catch {
      // Fixed: Removed unused error parameter
      setSubmitMessage('Error al procesar la solicitud. Por favor, inténtalo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Contacto Seguro</h1>
      
      {/* Aviso de seguridad HTTPS */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <span className="text-blue-400">🔒</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Conexión segura:</strong> Este sitio utiliza HTTPS para proteger tu información durante la transmisión.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
              Nombre completo * (solo letras y espacios)
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={50}
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Ej: Juan Pérez"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="usuario@ejemplo.com"
            />
          </div>
          
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
              Mensaje * (10-1000 caracteres)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={1000}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Caracteres: {formData.mensaje.length}/1000
            </p>
          </div>

          {/* CAPTCHA Anti-bot */}
          {isClient && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <label htmlFor="captcha" className="block text-gray-700 font-medium mb-2">
                Verificación Anti-bot *
              </label>
              <p className="text-gray-600 mb-2">{captchaQuestion}</p>
              <input
                type="number"
                id="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="0"
              />
            </div>
          )}

          {/* Aviso de Privacidad */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                checked={acceptPrivacy}
                onChange={(e) => setAcceptPrivacy(e.target.checked)}
                required
                className="mt-1 mr-3"
              />
              <div className="text-sm">
                <label htmlFor="privacy" className="text-gray-700 cursor-pointer">
                  <strong>Acepto el aviso de privacidad *</strong>
                </label>
                <p className="text-gray-600 mt-1">
                  Al enviar este formulario, acepto que mi información será transmitida por correo electrónico. 
                  Los datos no se almacenan en bases de datos, pero la transmisión por email puede no estar cifrada end-to-end.
                </p>
                <button
                  type="button"
                  onClick={() => setShowPrivacyNotice(!showPrivacyNotice)}
                  className="text-green-600 hover:text-green-800 underline mt-1"
                >
                  {showPrivacyNotice ? 'Ocultar' : 'Ver'} política completa
                </button>
              </div>
            </div>
          </div>

          {/* Política de Privacidad Expandida */}
          {showPrivacyNotice && (
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
              <h3 className="font-bold mb-2">Política de Privacidad</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Solo recopilamos los datos necesarios para responder a tu consulta</li>
                <li>No almacenamos información en bases de datos</li>
                <li>Los datos se envían directamente por correo electrónico</li>
                <li>No compartimos tu información con terceros</li>
                <li>Puedes solicitar la eliminación de tus datos en cualquier momento</li>
                <li>La transmisión puede no estar cifrada end-to-end dependiendo del proveedor de email</li>
              </ul>
            </div>
          )}
          
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !acceptPrivacy || !isClient}
            className={`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg transition-colors ${(isSubmitting || !acceptPrivacy || !isClient) ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {!isClient ? 'Cargando...' : isSubmitting ? 'Enviando de forma segura...' : 'Enviar mensaje'}
          </button>
          
          {submitMessage && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              submitMessage.includes('éxito') 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Otras formas de contacto</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2">📧</span> contacto@ods-sitio.com
          </li>
          <li className="flex items-center">
            <span className="mr-2">📱</span> +34 123 456 789
          </li>
          <li className="flex items-center">
            <span className="mr-2">🏢</span> Calle Sostenibilidad, 123, Madrid, España
          </li>
        </ul>
        
        {/* Información de Seguridad */}
        <div className="mt-6 pt-4 border-t border-green-200">
          <h3 className="font-bold text-green-800 mb-2">Medidas de Seguridad Implementadas:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>✅ Conexión HTTPS segura</li>
            <li>✅ Validación y sanitización de datos</li>
            <li>✅ Protección anti-bot con CAPTCHA</li>
            <li>✅ Política de privacidad transparente</li>
            <li>✅ Validación de entrada con expresiones regulares</li>
          </ul>
        </div>
      </div>
    </div>
  );
}