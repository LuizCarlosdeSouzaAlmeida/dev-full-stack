package ufg.fullstack.couse

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class CorsConfig {
    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.addAllowedOrigin("*") // Allow requests from any origin. Change to specific origins if needed.
        config.addAllowedHeader("*") // Allow all headers
        config.addAllowedMethod("*") // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }
}
