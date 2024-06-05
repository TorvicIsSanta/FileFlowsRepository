import { Radarr } from 'Shared/Radarr';
/**
 * This script will send a rename command to Radarr
 * @author Shaun Agius
 * @version 1.0.0
 * @revision 4
 * @param {string} URI Radarr root URI and port (e.g. http://radarr:1234)
 * @param {string} ApiKey API Key
 * @output Item renamed
 * @output Item not found
 */
function Script(URI, ApiKey) {
    let radarr = new Radarr(URI, ApiKey);
    let movie = radarr.getMovieByFile(Variables.file.Name);
    if (!movie)
        return 2;
    Logger.ILog(`Renaming ${movie.title}`);
    let endpoint = `rename`;
    let queryParmeters = `movieId=${movie.id}`
    let response = radarr.fetchJson(endpoint, queryParmeters);
    Logger.ILog(`Response ${response}`);
    return 1;
}