import { useEffect, useContext } from 'react'
import LogoImg from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/container'
import { Input } from '../../components/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { auth } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { AuthContext } from '../../contexts/AuthContext'
import toast from 'react-hot-toast'

const schema = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Insira um email válido").min(1, "O campo email é obrigatório"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
})

type FormData = z.infer<typeof schema>

export function Register() {
    const { handleInfoUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    useEffect(() => { 
            async function handleLogout() {
                await signOut(auth)
            }
    
            handleLogout();
        }, [])

  async function onSubmit(data: FormData) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then( async (user) => {
         await updateProfile(user.user, {
            displayName: data.name
         })
         handleInfoUser({
            name: data.name,
            email: data.email,
            uid: user.user.uid
         })

         
         
         toast.success("Bem vindo ao WEBAUTO!")
         navigate("/dashboard", {replace: true})
        })
        .catch((error) => {
            console.log('error ao cadastrar esse usuário')
            console.log(error)
            toast.error("Erro ao registrar!")
        })
    }

    return (

        <Container>
            <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
                <Link className='mb-6 max-w-sm w-full' to={'/'}>
                    <img
                        className='w-full'
                        src={LogoImg}
                        alt="Logo do site"
                    />
                </Link>

                <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-xl w-full rounded-lg p-4'>
                    <div className='mb-3'>
                        <Input
                            placeholder="Digite seu email..."
                            name="email"
                            type="email"
                            error={errors.email?.message}
                            register={register}
                        >
                        </Input>
                    </div>

                    <div className='mb-3'>
                        <Input
                            placeholder="Digite sua senha..."
                            name="password"
                            type="password"
                            error={errors.password?.message}
                            register={register}
                        >
                        </Input>
                    </div>

                    <div className='mb-3'>
                        <Input
                            placeholder="Digite seu nome completo..."
                            name="name"
                            type="text"
                            error={errors.name?.message}
                            register={register}
                        >
                        </Input>
                    </div>

                    <button type='submit' className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>
                        Cadastrar
                    </button>
                </form>

                <Link to={'/login'}>
                    Ja possui uma conta ? Faça o login
                </Link>
            </div>
        </Container>

    )
}
