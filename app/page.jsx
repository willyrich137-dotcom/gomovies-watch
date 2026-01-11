"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaFilm, FaTv, FaSearch, FaStar, FaUsers, FaGlobe, FaUser, FaCalendar, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      {/* Hero Section dengan Optimasi SEO */}
      <div className="bg-gradient-to-b from-purple-900/50 to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-orange-400">
            Gomovies - Ultimate Movie & TV Series Database - Your Complete Cinema Guide
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your comprehensive guide to 10,000+ movies, 5,000+ TV series, actor profiles, genre pages, and streaming information.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/movie/popular" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaFilm /> Browse Movies
            </Link>
            <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTv /> Browse TV Series
            </Link>
            <Link href="/people" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaUser /> Explore Actors
            </Link>
            <Link href="/rankings" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTrophy /> Top Rankings
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content dengan Deskripsi SEO Extended */}
        <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          {/* Introduction dengan Konten SEO */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <img
                src="https://live.staticflickr.com/65535/54796879356_0cf11547b4_b.jpg"
                alt="Movie reels and cinema tickets - Ultimate movie database for film enthusiasts"
                width={1024}
                height={416}
                className="rounded-xl shadow-2xl mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
                Discover the World of Cinema with Gomovies - America's Premier Movie Database
              </h2>
              <div className="text-lg text-gray-400 max-w-4xl mx-auto space-y-4 text-justify">
                <p>
                  <strong>Gomovies</strong> is United America's most complete and comprehensive movie and TV series information platform, serving as the definitive online resource for cinephiles, film students, industry professionals, and casual viewers alike. Our platform provides meticulously curated, accurate data spanning over a century of cinematic history, from silent film classics to the latest blockbuster releases and trending TV series.
                </p>
                <p>
                  As a premier movie database website, we offer more than just basic information - we deliver an immersive experience that includes detailed user reviews, comprehensive streaming guides across multiple platforms, in-depth actor and filmmaker profiles, complete genre archives, and sophisticated search capabilities that allow users to discover content based on countless criteria.
                </p>
                <p>
                  Our database features an extensive collection of <strong>over 10,000 movies</strong> and <strong>5,000+ TV series</strong>, each with complete metadata including cast and crew details, production information, technical specifications, awards and nominations, box office performance, critical reception, and viewer ratings. We continuously update our database with new releases, ensuring our users have access to the most current information in the entertainment industry.
                </p>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Description Section - Minimal 2000 Kata */}
          <section className="mb-16 bg-gray-900/50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-300">
              Complete Guide to Movies, TV Series, and Cinema Database
            </h2>
            
            <div className="space-y-6 text-gray-400 text-justify">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Introduction to Gomovies Database</h3>
              
              <p>
                Welcome to <strong>Gomovies</strong>, the ultimate destination for movie enthusiasts and television series fans. Our platform represents the culmination of years of data collection, curation, and user experience optimization, designed to serve as the most reliable and comprehensive online resource for cinematic information. Whether you're researching a classic film, discovering new TV shows, or exploring actor filmographies, our database provides unparalleled depth and accuracy.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Comprehensive Movie Database Features</h3>
              
              <p>
                Our movie database stands as one of the most extensive collections of film information available online. Each movie entry includes complete production details, comprehensive cast and crew listings, detailed plot summaries, critical reviews, audience ratings, technical specifications, and streaming availability across multiple platforms. We cover films from every era and genre, including Hollywood blockbusters, independent films, international cinema, documentary features, animated films, and cult classics.
              </p>

              <p>
                The database features advanced filtering capabilities allowing users to search movies by year, genre, director, actor, language, country of origin, runtime, MPAA rating, and more. Each film profile includes related recommendations, similar movies, trivia, goofs, quotes, soundtrack information, and behind-the-scenes details. Our streaming guide shows exactly where each movie is available to watch, whether on Netflix, Amazon Prime, Hulu, Disney+, HBO Max, or other streaming services.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">TV Series Database and Episode Guides</h3>
              
              <p>
                Our TV series database provides exhaustive information on thousands of television shows from around the world. Each series includes complete episode guides with detailed summaries, air dates, director and writer credits, guest stars, and viewer ratings for individual episodes. We cover everything from classic sitcoms and drama series to reality TV, anime, documentaries, and limited series.
              </p>

              <p>
                The database includes comprehensive season breakdowns, character profiles, series timelines, awards and nominations, behind-the-scenes features, and cancellation or renewal status updates. Our streaming information shows which platforms carry each series and which seasons are available. We also provide information on international availability and regional restrictions where applicable.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Actor and Filmmaker Profiles</h3>
              
              <p>
                Our people database features detailed profiles for actors, directors, producers, writers, cinematographers, composers, and other industry professionals. Each profile includes biographical information, career timelines, filmography with role details, awards and nominations, personal trivia, and high-quality photo galleries. We track career developments, upcoming projects, and industry news for thousands of entertainment professionals.
              </p>

              <p>
                The database allows users to explore connections between industry professionals, see who frequently collaborates with whom, and discover new talent based on their interests. Each profile includes related content recommendations and career highlights, making it easy to explore an individual's body of work comprehensively.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Genre Exploration and Categorization</h3>
              
              <p>
                Our genre system provides sophisticated categorization that goes beyond basic labels. We offer detailed genre pages for categories including Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film-Noir, History, Horror, Music, Musical, Mystery, Romance, Sci-Fi, Sport, Thriller, War, and Western. Each genre page includes sub-genre breakdowns, historical context, notable examples, and recommendations.
              </p>

              <p>
                Beyond traditional genres, we also categorize content by mood, theme, setting, and style. Users can discover movies and series based on specific themes like time travel, coming-of-age, heist films, courtroom dramas, or specific historical periods. This sophisticated categorization system helps users discover content that matches their specific interests and preferences.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Year and Decade Archives</h3>
              
              <p>
                Our historical archives allow users to explore cinema chronologically. Each year page shows all movies released in that year, sorted by popularity, critical reception, and box office performance. Decade overviews provide context about cinematic trends, technological developments, and cultural influences that shaped each era of filmmaking.
              </p>

              <p>
                The archives include special sections for significant years in cinema history, such as 1939 (often called "Hollywood's Greatest Year"), 1975 (the birth of the modern blockbuster), and 1999 (a landmark year for independent and mainstream cinema). Each archive page includes historical context, notable trends, award winners, and cultural impact analysis.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Ratings, Rankings, and User Reviews</h3>
              
              <p>
                Our comprehensive rating system aggregates scores from major critics, industry awards, and user reviews to provide balanced, reliable evaluations of movies and TV series. The ranking system includes "Best of All Time" lists, annual rankings, genre-specific rankings, and specialized lists like "Hidden Gems," "Cult Classics," and "Award Winners."
              </p>

              <p>
                User reviews on Gomovies come from verified viewers and include detailed analysis, spoiler warnings, and content advisories. Our review system encourages thoughtful criticism and helpful recommendations, creating a community of engaged film enthusiasts who contribute to the platform's depth and value.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Streaming Guide and Availability</h3>
              
              <p>
                One of our most valuable features is the comprehensive streaming guide that shows exactly where every movie and TV series is available to watch. We track availability across dozens of streaming platforms including subscription services, rental services, free platforms, and broadcast television. Our database includes region-specific information and regularly updates to reflect changing licensing agreements.
              </p>

              <p>
                The streaming guide includes price comparisons, quality options (SD, HD, 4K), availability dates, and expiration warnings. We also provide information on physical media availability (DVD, Blu-ray, 4K UHD) and digital purchase options across various platforms.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Advanced Search and Discovery Tools</h3>
              
              <p>
                Our advanced search functionality allows users to find content based on incredibly specific criteria. Search by multiple actors simultaneously, combine genre filters, set runtime ranges, specify release date windows, filter by country of origin, language, MPAA rating, color vs black-and-white, aspect ratio, and countless other technical and creative parameters.
              </p>

              <p>
                The discovery engine uses sophisticated algorithms to recommend content based on viewing history, ratings, and stated preferences. Our "If You Like" system suggests similar content, while our "Explore" features help users discover new genres, directors, and actors they might enjoy based on their established interests.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Educational and Research Resources</h3>
              
              <p>
                Gomovies serves as a valuable resource for film students, researchers, and educators. Our database includes academic citations, production histories, critical analysis, and cultural context for thousands of films. We provide resources for studying film theory, cinematic techniques, industry history, and cultural impact.
              </p>

              <p>
                Special sections cover film movements (French New Wave, German Expressionism, Italian Neorealism), technological developments (transition to sound, color film, digital cinema), and industry trends. These resources make Gomovies an essential tool for anyone studying or teaching film and media.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Community Features and User Engagement</h3>
              
              <p>
                Our platform fosters an engaged community of film enthusiasts through discussion forums, watch parties, user lists, and social features. Users can create and share custom lists, participate in polls and quizzes, join genre-specific communities, and contribute to our growing database through our moderated submission system.
              </p>

              <p>
                Regular features include weekly watch recommendations, director spotlights, genre deep-dives, and historical retrospectives. Our community calendar highlights film festivals, special screenings, anniversaries, and industry events of interest to our users.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Mobile Experience and Accessibility</h3>
              
              <p>
                Gomovies is fully optimized for mobile devices, with responsive design that works perfectly on smartphones and tablets. Our mobile app (available on iOS and Android) provides all the features of the desktop site with additional mobile-specific functionality including watchlist synchronization, offline access to saved information, and push notifications for availability updates.
              </p>

              <p>
                We prioritize accessibility with features including screen reader compatibility, keyboard navigation, adjustable text sizes, high contrast modes, and closed captioning information for all video content. Our commitment to accessibility ensures that all users, regardless of ability, can fully experience and benefit from our database.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Data Accuracy and Regular Updates</h3>
              
              <p>
                Maintaining data accuracy is our highest priority. We employ a combination of automated data collection, manual verification, and community contributions to ensure information correctness. Our team of editors regularly reviews and updates entries, correcting errors and adding new information as it becomes available.
              </p>

              <p>
                We track industry announcements, press releases, and official sources to provide the most current information about upcoming releases, casting news, production updates, and streaming availability changes. Our update schedule ensures that users always have access to the latest and most accurate information.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Conclusion: Your Ultimate Cinema Resource</h3>
              
              <p>
                Gomovies represents more than just a database - it's a comprehensive ecosystem for film discovery, education, and appreciation. Whether you're a casual viewer looking for something to watch tonight, a film student researching cinematic history, an industry professional verifying credits, or a cinephile exploring new horizons, our platform provides the tools, information, and community to enhance your cinematic journey.
              </p>

              <p>
                With our commitment to accuracy, comprehensiveness, and user experience, Gomovies continues to set the standard for online movie databases. Join our growing community of film enthusiasts and discover why we're recognized as the premier destination for cinematic information and discovery.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-orange-300">
              Complete Movie Database Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaFilm className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Movie Details</h3>
                <p className="text-gray-400 text-justify">Complete information, cast, reviews, and streaming availability for thousands of films</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTv className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">TV Series Database</h3>
                <p className="text-gray-400 text-justify">Complete episode guides, season information, and streaming details for television shows</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaUser className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Actor Profiles</h3>
                <p className="text-gray-400 text-justify">Detailed actor information with complete filmography and career highlights</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaCalendar className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Year Archives</h3>
                <p className="text-gray-400 text-justify">Browse movies by release year and explore historical decades of cinema</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTrophy className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Top Rankings</h3>
                <p className="text-gray-400 text-justify">Highest rated movies and TV series across all categories and genres</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaSearch className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
                <p className="text-gray-400 text-justify">Find content by multiple criteria and sophisticated filters for precise discovery</p>
              </div>
            </div>
          </section>

          {/* Detailed Sections dengan text-justify */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Complete Movie Information Database</h3>
                <div className="text-gray-400 mb-4 text-justify space-y-3">
                  <p>
                    Access comprehensive details for every movie in our extensive database with complete metadata, production information, and streaming availability across all major platforms.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Complete cast and crew information with role details and biographical data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>User reviews and professional critic ratings aggregated from multiple sources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Streaming platform availability across subscription, rental, and free services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Trailers, teasers, behind-the-scenes footage, and official video content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Similar movie recommendations and algorithmically generated related content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Release dates, box office data, production budgets, and financial performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Technical specifications including runtime, aspect ratio, color process, and sound</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Awards, nominations, festival screenings, and critical reception analysis</span>
                    </li>
                  </ul>
                </div>
                <Link href="/movie/popular" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FaFilm /> Explore Complete Movie Database
                </Link>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Comprehensive movie database interface with detailed film information and streaming options"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-700/30 p-6 rounded-xl order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Actor profiles and filmography database with career information and movie credits"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Actor & People Profiles Database</h3>
                <div className="text-gray-400 mb-4 text-justify space-y-3">
                  <p>
                    Discover detailed information about your favorite actors, directors, and industry professionals with comprehensive career data and filmography listings.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Complete biography, personal details, and career milestones with timeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Full filmography with role details, release dates, and production information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>TV series appearances, guest roles, and recurring character information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Awards, nominations, honors, and industry recognition with ceremony details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Upcoming projects, current productions, and announced future work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>High-quality photos, media galleries, interview transcripts, and public appearances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Collaboration networks showing frequent co-stars and creative partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Educational background, training, and professional development information</span>
                    </li>
                  </ul>
                </div>
                <Link href="/people" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FaUser /> Browse Complete Actor Database
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action dengan Optimasi SEO */}
          <section className="text-center py-12 bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
              Start Your Cinematic Journey with Gomovies Today
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-justify">
              Join our community of film enthusiasts accessing the most comprehensive movie and TV series database available online. With thousands of verified entries, real-time updates, and sophisticated discovery tools, Gomovies provides everything you need to explore, research, and enjoy the world of cinema.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/movie/365-days-this-day-2022/stream" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaFilm /> Start Exploring Movies
              </Link>
              <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaTv /> Browse TV Series Database
              </Link>
            </div>
            <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-justify">
              <strong>Gomovies</strong> - Your ultimate resource for movie information, TV series details, actor profiles, streaming guides, and cinematic discovery. Whether you're researching film history, planning your viewing schedule, or simply exploring the vast world of cinema, we provide the comprehensive database, accurate information, and intuitive tools you need to enhance your movie-watching experience and deepen your understanding of film as an art form and cultural phenomenon.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}