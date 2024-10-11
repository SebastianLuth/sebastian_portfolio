const SocialButton = () => {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="text-white hover:text-gray-500">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.286c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12.25 10.286h-2.5v-4.5c0-1.105-.895-2-2-2s-2 .895-2 2v4.5h-2.5v-9h2.5v1.236c.695-.787 1.705-1.236 2.75-1.236 2.481 0 4.5 2.019 4.5 4.5v4.5z" />
        </svg>
      </a>
      <a href="#" className="text-white hover:text-gray-500">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l11.954-7.165c-.195-1.945-1.86-3.549-3.854-3.549h-16.2c-2.028 0-3.682 1.655-3.9 3.65l11.936 7.152h.064zm-.064 2.139l-11.935-7.152v10.3c0 2.1 1.854 3.75 3.904 3.75h16.193c2.043 0 3.84-1.639 3.85-3.7v-10.3l-11.936 7.152h-.076z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialButton;
