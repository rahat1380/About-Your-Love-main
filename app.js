
const loveInfo = ['বিশ্বাস করো তোমাদের এই প্রেম জিবনেও টিকবে না তোমাদের এই প্রেমে স্বার্থ ছাড়া আর কিছুই নেই, অতয়েব সময় আছে ব্রেকআপ করে নাও।', 'আর কত এমন লুকিয়ে লুকিয়ে প্রেম করবে এবার বিয়ে করে নাও  তা নাহলে প্রেম পাখি উরে যাবে তখন আর কান্নাকরে কন লাভ হবে না  ', 'তোমাদের কপালে দুঃখ আছে বুঝতে পারছি তারাতারি ব্রেকআপ করো নতুন প্রেমের উদ্দেশে বাহিরে যাও তুমি যাকে ভালোবাসো সে তো একটা প্রতারক তোমার সাথেও প্রেম করে আবার অন্য জায়গায়ও টাংকি মারে সাবধান।', 'আরে তোমাদের প্রেম তো অনেক সুন্দর আশা করা যায় তোমাদের প্রেম সার্থক হবে এবং তোমরা খুব তারাতারি বিয়েও করবে এখন তোমাদের কাজ হচ্ছে হানিমুনে কোন দেশ যাবে তা চিন্তা করে দাও আর হ্যাঁ আমাকে দাওয়াত দিতে ভুলবে না কিন্তু','তোমাদের প্রেমে তো বেশি আবেগ চলে মনে হয় না যে এই প্রেম টিকবে তবুও চেষ্টা চালিয়ে যাও দেখো কি হয় আর হযাঁ তোমাদের প্রেম টিকলে অবশই আমাকে জানাবে', 'তোমরা দুইজন দুইজন কে অনেক ভালোবাসো তোমাদের প্রেম দেখে তোমাদের বন্ধুরা হিংসা করে তোমাদের সহ্য করতে পারে  না সারা জীবন এভাবে থেকে কখনো কেউ কাউকে কষ্ট দিয়ো না'];


document.getElementById('sent-btn').addEventListener('click', function(){

    const boyName = document.getElementById('boy-input').value;
    const girlName = document.getElementById('girl-input').value;

    if (boyName.trim() === '' || girlName.trim() === '') {
              alert('please type all name');
              return;
            }

            const randomLove = loveInfo[Math.floor(Math.random() * loveInfo.length)];
            const loveMessage = `${boyName} এবং ${girlName} তোমাদের প্রেম: ${randomLove}`;

            document.getElementById('output-Display').innerText = loveMessage; 
            boyName.value = '';
            girlName.value = '';
            
            J
          
})









