import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to QuizMaster</h1>
        <p className="text-lg md:text-xl mb-6">
          Play quizzes with friends, test your knowledge, and climb the leaderboard!
        </p>
        <Link
          to="/login"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Real-Time Quizzes</h3>
            <p>Compete live with friends and see scores update instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Diverse Questions</h3>
            <p>Enjoy quizzes from multiple categories and difficulty levels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">Leaderboard</h3>
            <p>Track your progress and aim for the top spot!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
