import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img 
            src="/src/assets/mobi-logo.png" 
            alt="MOBI+" 
            className="w-20 h-20 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Bem-vindo ao MOBI+
          </h1>
          <p className="text-muted-foreground mt-2">
            Mobilidade urbana inteligente
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm space-y-6">
          {/* Toggle Login Method */}
          <div className="flex gap-2 p-1 bg-card rounded-lg">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginMethod === "email"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Mail className="inline-block w-4 h-4 mr-2" />
              Email
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginMethod === "phone"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Phone className="inline-block w-4 h-4 mr-2" />
              Telefone
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="credential">
                {loginMethod === "email" ? "Email" : "Telefone"}
              </Label>
              <Input
                id="credential"
                type={loginMethod === "email" ? "email" : "tel"}
                placeholder={
                  loginMethod === "email"
                    ? "seu@email.com"
                    : "(00) 00000-0000"
                }
                className="bg-card border-border"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <button className="text-xs text-primary hover:text-primary/80">
                  Esqueceu?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-card border-border"
              />
            </div>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold h-12">
            Entrar
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">ou continue com</span>
            <Separator className="flex-1" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="bg-card border-border hover:bg-card/80">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </Button>
            <Button variant="outline" className="bg-card border-border hover:bg-card/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
            <Button variant="outline" className="bg-card border-border hover:bg-card/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Não tem uma conta? </span>
            <button className="text-primary hover:text-primary/80 font-semibold">
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
