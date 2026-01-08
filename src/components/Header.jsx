function Header() {
    return (
        <header className="flex flex-row items-center justify-center gap-10">
            <img className="size-40" src="./src/components/react_logo.png" alt="Quiz App Logo" />
            <h1 className="text-3xl font-mono uppercase">React Quiz App</h1>
        </header>
    )
}

export default Header;