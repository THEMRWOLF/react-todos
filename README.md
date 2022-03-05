# Descripción

Aplicación realizada con la intención de aprender las nociones básicas de [React](https://reactjs.org/) y [Tailwind](https://tailwindcss.com/), su función es agregar tareas a un lista, poder marcar las completadas, asi como eliminar todas aquellas que se hayan marcado.

Para realizar el proyecto se uso el «[useState](https://reactjs.org/docs/hooks-reference.html#usestate)», «[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)», «[useRef](https://reactjs.org/docs/hooks-reference.html#useref)» de React, también se uso «[v4](https://www.npmjs.com/package/uuid)» de uuid.

## useState

```javascript
// Retorna el valor (state) y la función para actualizarlo (setState)
const [state, setState] = useState(initialState)

// Para trabajar con los valores hay que crear una copia de estos
const newState = [...state]

// Una vez cambiado los valores, los actualizamos con su función
setState(newState)
```

## useEffect
```javascript
// La función pasada se ejecutará después de que el renderizado es confirmado

// Obtenemos los valores guardados en localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(KEY))
    if (stored) setState(stored)
  }, [])

// Modificamos los valores de localStorage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state))
  }, [state])
```

## useRef
```javascript
// El objeto devuelto se mantendrá persistente durante la vida completa del componente.

const refContainer = useRef(initialValue)

const value = refContainer.current.value
```

## v4
```javascript
// Genera ids únicos

// Se importa
import { v4 as uuidv4 } from 'uuid'

// Se usa
uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```